
import { observable, action } from 'mobx';
import { Repos } from '../Repositorys';
export default class BallListProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.ballListRepo;
  }

@observable ballShowListChoose = {
  valueStart: '0',
  valueEnd: '1',
};
@action ballShowListChooseChange = (numberStart,numberEnd) => {
  this.ballShowListChoose['valueStart'] = numberStart
  this.ballShowListChoose['valueEnd'] = numberEnd
}



  // @observable typeOfInput = '';
  @observable addModalFile = '';
  @observable inputBallList = {
    // num1: '',
    // num2: '',
    // num3: '',
    // num4: '',
    // num5: '',
    // num6: '',
    // bonus: '',
    dateDraw: '',
    weekly: '',
    
  };

  @action inputBallListChange = (keyValue, newValue) => {
    if(newValue > 39){

    }else{
      this.inputBallList[keyValue] = newValue;
      
    }
    
  }

  @action addModalFileChange = (e) => {
    const newDate = e.target.value;
    this.inputBallList['dateDraw'] = newDate
    // console.log(newDate);
    this.addModalFile = newDate
    
    
  };

  @action createdBallList = async () => {
    const {data} = await this.repo.createdBallList(this.inputBallList)
    // console.log(data)
    this.inputBallList = {
      // num1: '',
      // num2: '',
      // num3: '',
      // num4: '',
      // num5: '',
      // num6: '',
      // bonus: '',
      dateDraw: '',
      weekly: '',

    }
    this.addModalFile = '';
    this.readBallListOut()
}
  @observable ballListOut = [];

  @action readBallListOut = async () => {
    const {data} = await this.repo.readBallListOut();
    // console.log(data)
    this.ballListOut = data
  }


  }