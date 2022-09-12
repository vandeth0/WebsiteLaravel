import autobind from 'autobind-decorator';
import Axios from 'axios';

export default class LocationDealerRepo {
  URL = '/api/LocationDealer';
  constructor(url) {
    this.URL = url || this.URL;
  }
  @autobind
  async createdLocationDealer(data) {
    const formData = new FormData();
    formData.append('storeId', data.storeId);
    formData.append('shopName', data.shopName);
    formData.append('nameDealer', data.nameDealer);
    formData.append('phone', data.phone);
    formData.append('lat', data.lat);
    formData.append('lng', data.lng);
   
    return await Axios.post(`${this.URL}/created`, formData).catch((reason) => {
      console.log(reason);
      console.log(reason.response);
    });
  }

  // @autobind
  // async createdLocation(addData) {
  //   return await Axios.post(`${this.URL}/created`, {addData}).catch((reason) => {
  //     console.log(reason)
  //     console.log(reason.response)
  //   })
  // }
  @autobind
  async readLocation(){
    return await Axios.post(`${this.URL}/read`).catch((reason) => {
      console.log(reason)
      console.log(reason.response)
    })
  }
  @autobind
  async deletedLocation(delItem) {
    return await Axios.post(`${this.URL}/deleted`, { delItem }).catch(
      (reason) => {
        console.log(reason);
        console.log(reason.response);
      }
    );
  }

  @autobind
  async updatedLocation(editData) {
    const formData = new FormData();
    formData.append('id', editData.id);
    formData.append('storeId', editData.storeId);
    formData.append('shopName', editData.shopName);
    formData.append('nameDealer', editData.nameDealer);
    formData.append('phone', editData.phone);
    formData.append('lat', editData.lat);
    formData.append('lng', editData.lng);
    return await Axios.post(`${this.URL}/updated`, formData).catch((reason) => {
      console.log(reason);
      console.log(reason.response);
    });
  }


}