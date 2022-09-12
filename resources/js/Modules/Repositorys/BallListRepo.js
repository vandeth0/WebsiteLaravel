import autobind from 'autobind-decorator'
import Axios from "axios";

export default class BallListRepo {
  URL = '/api/BallList';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async createdBallList(addData) {
    const formData = new FormData();
    // formData.append('num1', addData.num1);
    // formData.append('num2', addData.num2);
    // formData.append('num3', addData.num3);
    // formData.append('num4', addData.num4);
    // formData.append('num5', addData.num5);
    // formData.append('num6', addData.num6);
    // formData.append('bonus', addData.bonus);
    formData.append('date_draw', addData.dateDraw);
    formData.append('weekly', addData.weekly);
    return await Axios.post(`${this.URL}/created`, formData).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }

  @autobind
  async readBallListOut() {
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }
}