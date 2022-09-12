
import { observable, action } from 'mobx';
import { Repos } from '../Repositorys';
export default class BallApiProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.ballApiRepo;
  }
  @observable ballApiResults = [];
  @observable ballApiList = [];
  @observable appear = 0;

  @action ballApiResult = async () => {
    const { data } = await this.repo.ballApiResult()
    this.ballApiResults = data
    // console.log(this.ballApiResults)
    
  }
  @action createdBallApi = async (postData) => {
    // const x = document.getElementById('loading-result');
    // x.style.display = 'none'
    const { data } = await this.repo.createdBallApi(postData)
    this.ballApiList = data;
    this.appear = 1
    // if(this.ballApiList !== ''){
    //   x.style.display = 'block'
    // }
  }
  @observable valueBallList = {
    start: 0,
    end: 1
  }
  @action valueChangeBallList = (start, end) => {
    this.valueBallList['start'] = start;
    this.valueBallList['end'] = end;

  }


  }