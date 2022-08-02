import autobind from 'autobind-decorator';
import Axios from 'axios';

export default class GalleryRepo {
  URL = '/api/Gallery';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async createdGallery(addData, file) {
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
  async readGallery(){
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }


}