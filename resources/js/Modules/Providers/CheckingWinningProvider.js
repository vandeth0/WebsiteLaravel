import { observable, action, computed } from 'mobx';
import { Repos } from '../Repositorys';

export default class CheckingWinningProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.checkingWinningRepo;
  }
  @observable chooseFromBall = [];
  @action chooseFromBallEnter = (data) => {
    if(this.chooseFromBall.length > 5){

    }else{
      this.chooseFromBall.push(data)
    }
    // console.log(this.chooseFromBall)
  }
  @action chooseFromBallRemove = (data, remove) => {

    this.chooseFromBall.splice(data, remove)
    
    // console.log(this.chooseFromBall)
  }

  @observable numberSameValue = new Array(39);
  @action numberSameValueEnter = (data, idx) => {
      

      this.numberSameValue[idx] = data;
      // console.log(this.numberSameValue)
  }
  @action numberSameValueRemove = (data, idx) => {

    this.numberSameValue[idx] = data;
    
    // console.log(this.numberSameValue)
  }
  @action clearValueWinning = () => {
    this.resultLotteryShow = [];
    this.resultLotteryValueWeekly = [];
    this.resultWinningData = 0
  }


  @observable resultLotteryShow = [];
  @observable resultLotteryValueWeekly = [];
  @observable resultLotteryValueWeeklyBonus = [];
  @observable resultWinningData = 0;
  @observable resultWinningDataBonus = 0;
  @action resultLottery = (n1,n2,n3,n4,n5,n6,bonus) => {
    this.resultLotteryShow.push(...this.chooseFromBall);
    console.log(this.resultLotteryShow)
    this.resultLotteryValueWeekly.push(n1,n2,n3,n4,n5,n6)
    this.resultLotteryValueWeeklyBonus.push(bonus)
    console.log(this.resultLotteryValueWeekly)
    for(let i = 0; i < 6; i++){
      for(let j = 0; j < 6; j++){
        if(this.resultLotteryShow[i] == this.resultLotteryValueWeekly[j]){
          this.resultWinningData++;
        }
        
      }
      if(this.resultLotteryShow[i] == this.resultLotteryValueWeeklyBonus[0]){
        this.resultWinningDataBonus++;
        console.log(this.resultWinningDataBonus)
      }
    }
    if(this.resultWinningData == 3){
      this.resultWinningData = 'You Won (5 Prize)'
    }else if(this.resultWinningData == 4){
      this.resultWinningData = 'You Won (4 Prize)'
    }else if(this.resultWinningData == 5){
      if(this.resultWinningDataBonus > 0){
        this.resultWinningData = 'You Won (2 Prize)'
      }else{
        this.resultWinningData = 'You Won (3 Prize)'
      }
    }else if(this.resultWinningData == 6){
      this.resultWinningData = 'You Won (1 Prize) ! Wow'
    }else{
      this.resultWinningData = 'You Lose'
    }
    for(let k = 0; k < 39; k++){
      this.numberSameValue[k] = 0
    }
    this.chooseFromBall.splice(0,6)
    console.log(this.resultWinningData)
  }



  
}