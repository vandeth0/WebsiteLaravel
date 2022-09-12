import { observable, action, computed } from 'mobx';
import { Repos } from '../Repositorys';

export default class LocationDealerProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.locationDealerRepo;
  }
  
  @observable searchStoreId = ''

  @action changeValueNumber = (x) => {
    
      if(x.length > 4){

      }else{
        this.searchStoreId = x
      }
      // console.log(x)
  }




  @observable locationDealer = [];

  @action readLocation = async () => {
    const {data} = await this.repo.readLocation();
    // console.log(data)
    this.locationDealer = data
  }
  @observable dataOfDealer = {
    name: '1',
    shop: '2',
    phone: '3',
    category: '4',
    lat: 11.593944,
    lng: 104.849201
  }
  @action inputDataOfDealer = (name,shop,phone,category,lat,lng) => {
    this.dataOfDealer['name'] = name,
    this.dataOfDealer['shop'] = shop,
    this.dataOfDealer['phone'] = phone,
    this.dataOfDealer['category'] = category,
    this.dataOfDealer['lat'] = lat,
    this.dataOfDealer['lng'] = lng,
    // console.log( this.dataOfDealer['name'])
    // console.log( this.dataOfDealer['shop'])
    // console.log( this.dataOfDealer['phone'])
    // console.log( this.dataOfDealer['category'])
    document.getElementById('bg-b').style.display = "flex"
  }
  @action closeResultsDealer = () => {
    document.getElementById('bg-b').style.display = "none"
  }
  @observable GoogleMain = {
    GoogleAll: 1,
    GoogleBranch: 1,
    GoogleAgency: 1,
  }
  @action googleAll = () =>{
    this.GoogleMain['GoogleAll'] = 1
    this.GoogleMain['GoogleBranch'] = 1
    this.GoogleMain['GoogleAgency'] = 1
    this.dataOfDealer['lat'] = 11.593944
    this.dataOfDealer['lng'] = 104.849201
  }
  @action googleAgency = () =>{
    this.GoogleMain['GoogleAll'] = 0
    this.GoogleMain['GoogleBranch'] = 0
    this.GoogleMain['GoogleAgency'] = 1
    this.dataOfDealer['lat'] = 11.593944
    this.dataOfDealer['lng'] = 104.849201
  }
  @action googleBranch = () =>{
    this.GoogleMain['GoogleAll'] = 0
    this.GoogleMain['GoogleBranch'] = 1
    this.GoogleMain['GoogleAgency'] = 0
    this.dataOfDealer['lat'] = 11.593944
    this.dataOfDealer['lng'] = 104.849201
  }
  @action googleHead = () =>{
    this.GoogleMain['GoogleAll'] = 1
    this.GoogleMain['GoogleBranch'] = 0
    this.GoogleMain['GoogleAgency'] = 0
    this.dataOfDealer['lat'] = 11.593944
    this.dataOfDealer['lng'] = 104.849201
  }

  @observable addModalData = null;

  @action addModalShow = () => {
    this.addModalData = {
      storeId: '',
      shopName: '',
      nameDealer: '',
      phone: '',
      lat: '',
      lng: '',
    };
  };
  @action storeIdEnter = (text, data) => {
    this.addModalData[text] = data
    
  }
  @action createdLocationDealer = async () => {
    const { data } = await this.repo.createdLocationDealer(this.addModalData);
    console.log(data)
    this.readLocation();
    this.addModalData = {
      storeId: '',
      shopName: '',
      nameDealer: '',
      phone: '',
      lat: '',
      lng: '',
    };
    
  };

  // ==========================Edit=====================
// @observable editModal = false;
@observable editModalData = {
  storeId: '',
  shopName: '',
  nameDealer: '',
  phone: '',
  lat: '',
  lng: '',
  
};
@action editModalShow = (data) => {
  this.editModalData = {
    id: data.id,
    storeId: data.store_id,
    shopName: data.shop_name,
    nameDealer: data.name_dealer,
    phone: data.phone,
    lat: data.lat,
    lng: data.lng,  
  };
}; 

@action editModalDataChange = (valueKey, newValue) => {
  this.editModalData[valueKey] = newValue;
};

@action updatedLocation = async () => {
  const {data} = await this.repo.updatedLocation(this.editModalData);
  this.readLocation();
  document.getElementById('location').style.display = 'none'
  // console.log(data)
  
};
// ==========================Edit=====================

  @action deletedLocation = async (mList) => {
    await this.repo.deletedLocation(mList);
    this.readLocation();
  };


}