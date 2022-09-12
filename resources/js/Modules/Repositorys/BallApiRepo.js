import autobind from 'autobind-decorator'
import Axios from "axios";

export default class BallApiRepo {
  URL = '/api/BallApi';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async createdBallApi(data){
    return await Axios.post(`${this.URL}/post`,{data}).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }
  @autobind
  async ballApiResult(){
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }
}