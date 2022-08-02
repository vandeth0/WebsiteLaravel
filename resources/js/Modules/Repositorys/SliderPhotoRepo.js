import autobind from 'autobind-decorator';
import Axios from 'axios';

export default class SliderPhotoRepo {
  URL = '/api/SliderPhoto';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async createdSliderPhoto(addData, file1,file2,file3) {
    const formData = new FormData();
    
    formData.append('file_name_1', addData.file_name_1);
    formData.append('file_name_2', addData.file_name_2);
    formData.append('file_name_3', addData.file_name_3);
    formData.append('file1', file1);
    formData.append('file2', file2);
    formData.append('file3', file3);
    return await Axios.post(`${this.URL}/created`, formData).catch((reason) => {
      console.log(reason);
      console.log(reason.response);
    });
  }

  @autobind
  async readSliderPhoto(){
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }


}