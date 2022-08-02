import { observable, action, toJS, computed } from 'mobx';
import _ from 'lodash';

/**
 * DTO 추상화 Class
 * @author 공정훈 <rhdtl78@gmail.com>
 * @export
 * @class ViewModel
 */
export default class ViewModel {
  /**
   * 실제 데이터 공간
   * field로서의 대입 연산은 모두 여기 아래에 저장된다.
   * e.g.
   * const a = new ViewModel();
   * a.field = "A";
   * console.log('a', toJS(a, {recurseEverything: true})) // a > { attributes: { field : 'A' } ... }
   *
   *
   * @memberof ViewModel
   * @observable
   * @type {Object}
   */
  @observable attributes = {};

  /**
   * 초기값을 위한 공간.
   *
   * @type {Object}
   * @memberof ViewModel
   */
  snapshot = {};

  /**
   * attributes의 필드 중, 타입 변환을 원하는 것을 선언
   * a.cast = { created_at : 'date' }
   * a.created_at // Sun Mar 01 2020 09:00:00 GMT+0900 (한국 표준시) {}
   *
   * @type {Object}
   * @memberof ViewModel
   */
  cast = {};

  /**
   * 값 변경이 가능한 필드 목록
   *
   * side-effect를 고려해 삭제하지 않음.
   * @deprecated
   * @type {String []}
   * @memberof ViewModel
   */
  fillable = [];

  /**
   * null이 될 수 있는 필드 목록
   *
   * 빈 배열이라면, 모든 필드는 null이 될 수 있음.
   *
   * @type {String []}
   * @memberof ViewModel
   */
  nullable = [];

  /**
   * Creates an instance of ViewModel.
   * @param {Object} attributes
   * @memberof ViewModel
   */
  constructor(attributes) {
    if (attributes) {
      this.setAttributes(attributes); // 데이터 반영
      this.snapshot = JSON.parse(JSON.stringify(attributes)); // 초기값 저장
    }
    // Proxy를 이용해 attributes 내부의 데이터에 접근할 수 있게함.
    return new Proxy(this, {
      get: function(model, path) {
        // 접근자 생성. model.a === model.attributes.a
        return model.getAttribute(path);
      },
      set: function(model, path, value) {
        // mutator 생성. model.a = 'A' == @action setA(value) { this.attributes.a = value }
        try {
          if (/cast|fillable|nullable|attributes/.test(path)) {
            // 특수 필드의 경우.
            return (model[path] = value);
          }

          return model.setAttribute(path, value); // attribute의 경우
        } catch (error) {
          // error handling
          console.error(error);
          return false;
        }
      }
    });
  }

  /**
   * attributes에 선언된 필드 목록
   *
   * @readonly
   * @computed
   * @type {String[]}
   * @memberof ViewModel
   */
  @computed get keys() {
    return Object.keys(this.attributes);
  }

  /**
   * 객체가 변경되었는지 여부 판단.
   *
   * @computed
   * @readonly
   * @type {Boolean}
   * @memberof ViewModel
   */
  @computed get isDirty() {
    const currentAttribute = toJS(this.attributes, { recurseEverything: true });
    return this.keys.some(key => {
      // 초기 값에는 없는데 현재 값에는 있는 경우 수정되었다 판단.
      if (this.snapshot[key] === undefined) {
        return true;
      }

      // 초기 값과 현재 값의 타입이 다르다면 수정되었다 판단.
      if (typeof this.snapshot[key] !== typeof currentAttribute[key]) {
        return true;
      }

      // 현재 값의 타입이 객체인 경우, 깊은 비교 수행
      // !!! 주의 !!!
      // typeof null => 'object'
      if (typeof currentAttribute[key] === 'object') {
        return (
          JSON.stringify(currentAttribute[key]) !==
          JSON.stringify(this.snapshot[key])
        );
      }

      // 원시 타입인 경우 값 비교 수행
      return this.snapshot[key] !== currentAttribute[key];
    });
  }

  /**
   * attribute 선언 및 할당.
   *
   * @action
   * @param {String}} path
   * @param {*} value
   */
  @action setAttribute(path, value) {
    if (this.isNullable(path)) {
      return _.set(this.attributes, path, value);
    } else {
      return _.set(this.attributes, path, value || '');
    }
  }

  /**
   * attributes 전체 할당.
   * 교체하지 않고, 전달 받은 attributes를 복사, 병합함.
   *
   * @action
   * @param {Object} attributes
   * @memberof ViewModel
   */
  @action setAttributes(attributes) {
    const attributeKeys = Object.keys(attributes);
    attributeKeys.map(key => {
      if (!this.isNullable(key)) {
        return _.set(this.attributes, key, attributes[key] || '');
      } else {
        return _.set(this.attributes, key, attributes[key]);
      }
    });
  }

  /**
   * 주어진 키가 null이 될 수 있는가 판단.
   *
   * @param {String} key
   * @returns {Boolean}
   * @memberof ViewModel
   */
  isNullable(key) {
    if (this.nullable.length === 0) return true;
    return this.nullable.indexOf(key) > -1;
  }

  /**
   * 주어진 경로의 값을 반환.
   *
   * @param {String} path
   * @returns {*}
   * @memberof ViewModel
   */
  getAttribute(path) {
    if (path === 'attributes') {
      return this.attributes;
    }
    if (_.has(this.attributes, path)) {
      if (_.has(this.cast, path)) {
        return this.getCastedAttribute(path);
      }
      return _.get(this.attributes, path);
    }
    return _.get(this, path);
  }

  /**
   * 주어진 경로의, 선언된 타입으로 캐스팅한 값을 반환.
   *
   * @param {String} path
   * @returns {*}
   * @memberof ViewModel
   */
  getCastedAttribute(path) {
    const type = _.get(this.cast, path);
    const attribute = _.get(this.attributes, path);
    if (type === 'date') {
      return new Date(attribute);
    }
    if (type === 'number') {
      return Number(attribute);
    }
    if (type === 'boolean') {
      if (/true/i.test(attribute)) {
        return true;
      }
      return false;
    }
  }

  /**
   * 타입 캐스팅 할 수 있는지 판단.
   *
   * @param {String} key
   * @returns {Boolean}
   * @memberof ViewModel
   */
  isCastable(key) {
    return Boolean(_.get(this.cast, key));
  }

  /**
   * attributes만 추출.
   * attributes 하위에 다른 모델이 포함되어있다면, 모두 json으로 변환.
   *
   * @returns {Object}
   * @memberof ViewModel
   */
  toJS() {
    return toJS(this.attributes, { recurseEverything: true });
  }
}
