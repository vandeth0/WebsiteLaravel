import { observable, action } from 'mobx';
import { Repos } from '../Repositorys';
export default class QNAProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.qnaRepo;
  }

  @observable inputQNA = '';

  @action inputQNAChange = newValue => {
    this.inputQNA = newValue;
  }

  @action createdQNA = async () => {
    const {data} = await this.repo.createdQNA(this.inputQNA)
    // console.log(data)
    this.readQNA();
    this.inputQNA = "";
  }

  @observable qnaList = [];

  @action readQNA = async () => {
    const {data} = await this.repo.readQNA();
    // console.log(data)
    this.qnaList = data
  }

  // @observable qnaComment = {
  //   start: 0,
  //   end: 5,
  // }

  // @action qnaCommentChange = (valueStart, valueEnd) => {
  //   this.qnaComment['start'] = valueStart,
  //   this.qnaComment['end'] = valueEnd
  // }

  @observable previousQna = 0;

  @action nextQnaChange = (data) => {
    this.previousQna++;
  }
  @action previousQnaChange = (data) => {
    this.previousQna--;
  }
  @observable qnaListNext = {
    start: 0,
    end: 5,
  }

  @action qnaCommentChange = (valueStart, valueEnd) => {
    this.qnaListNext['start'] = valueStart,
    this.qnaListNext['end'] = valueEnd
  }

  @action nextQnaChange = (data) => {
    this.previousQna++;
    // console.log(this.previousQna)
  }
  @observable NextQna = 5;
  @action nextQnaChangeValue = (x) => {
    this.NextQna += x;
    // console.log(this.NextQna)
  }


}