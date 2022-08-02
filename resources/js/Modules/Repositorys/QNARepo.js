import autobind from 'autobind-decorator'
import Axios from "axios";

export default class QNARepo {
  URL = '/api/QnA';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async createdQNA(addData) {
    return await Axios.post(`${this.URL}/created`, {addData}).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }

  @autobind
  async readQNA() {
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }
}