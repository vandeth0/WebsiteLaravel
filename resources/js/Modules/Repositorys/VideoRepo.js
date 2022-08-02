import autobind from 'autobind-decorator';
import Axios from 'axios';

export default class VideoRepo {
  URL = '/api/Video';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async createdVideo(addData, file) {
    const formData = new FormData();
    formData.append('title', addData.title);
    formData.append('contents', addData.contents);
    formData.append('file_name', addData.file_name);
    formData.append('file', file);
    return await Axios.post(`${this.URL}/created`, formData).catch((reason) => {
      console.log(reason);
      console.log(reason.response);
    });
  }

  @autobind
  async readVideo(){
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }


}