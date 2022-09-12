import { observable, action, computed } from 'mobx';
import { Repos } from '../Repositorys';

export default class SliderPhotoProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.sliderPhotoRepo;
  } 
  @action silderEnter = () => {
    document.getElementById('slider-photo-on').style.top= "0"
  }
  @action sliderClose = () => {
    document.getElementById('slider-photo-on').style.top= "-100%"
  }












  @observable addModal = false;
  @observable addModalData = null;
  @observable addModalFile1 = null;
  @observable addModalFile2 = null;
  @observable addModalFile3 = null;

  @action addModalShow = () => {
    this.addModalData = {
      file_name_1: '',
      file_name_2: '',
      file_name_3: '',
      file_hash_1: '',
      file_hash_2: '',
      file_hash_3: '',
      register_at: '',
    };

    this.addModalFile1 = null;
    this.addModalFile2 = null;
    this.addModalFile3 = null;
    this.addModal = true;
  };

  @action addModalHide = () => {
    this.addModal = false;
    this.addModalData = null;
    this.addModalFile = null;
  };



  @action addModalFileChange1 = (file) => {
    // console.log(file);
    this.addModalFile1 = file;
    if (file) {
      this.addModalData['file_name_1'] = file.name;
    }
  };
  @action addModalFileChange2 = (file) => {
    // console.log(file);
    this.addModalFile2 = file;
    if (file) {
      this.addModalData['file_name_2'] = file.name;
    }
  };
  @action addModalFileChange3 = (file) => {
    // console.log(file);
    this.addModalFile3 = file;
    if (file) {
      this.addModalData['file_name_3'] = file.name;
    }
  };

  @action createdSliderPhoto = async () => {
    // this.root.loadingShow();
    const { data } = await this.repo.createdSliderPhoto(
      this.addModalData,
      this.addModalFile1,
      this.addModalFile2,
      this.addModalFile3,
    );
    // this.root.loadingHide();
    // console.log(data);
    // this.addModalHide();
    // this.funInquiry();
    this.readSliderPhoto();

  };

  @observable sliderPhotoList = [];

  @action readSliderPhoto = async () => {
    const {data} = await this.repo.readSliderPhoto();
    // console.log(data)
    this.sliderPhotoList = data
  }

}