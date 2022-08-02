import autobind from 'autobind-decorator';
import Axios from 'axios';

export default class NewsRepo {
  URL = '/api/News';
  constructor(url) {
    this.URL = url || this.URL;
  }

  @autobind
  async createdNews(addData, file) {
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
  async updatedNews(editData, file) {
    const formData = new FormData();
    formData.append('id', editData.id);
    formData.append('title', editData.title);
    formData.append('contents', editData.contents);
    formData.append('file_name', editData.file_name);
    formData.append('file', file);
    return await Axios.post(`${this.URL}/updated`, formData).catch((reason) => {
      console.log(reason);
      console.log(reason.response);
    });
  }

  @autobind
  async readNews(){
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }

  @autobind
  async deletedNews(delItem) {
    return await Axios.post(`${this.URL}/deleted`, { delItem }).catch(
      (reason) => {
        console.log(reason);
        console.log(reason.response);
      }
    );
  }


}