import autobind from 'autobind-decorator'
import Axios from "axios";

export default class RootRepo {
  URL = '/api/php';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async phpTest() {
    return await Axios.post(`${this.URL}/phptest`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }

  @autobind
  async phpTest2() {
    return await Axios.post(`${this.URL}/phptest2`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }
}