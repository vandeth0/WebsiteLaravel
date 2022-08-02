import { observable, action, computed } from 'mobx';
import { Repos } from '../Repositorys';

export default class VideoProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.videoRepo;
  }
  @observable addModal = false;
  @observable addModalData = null;
  @observable addModalFile = null;

  @action addModalShow = () => {
    this.addModalData = {
      title: '',
      contents: '',
      file_name: '',
      file_hash: '',
      register_at: '',
    };

    this.addModalFile = null;
    this.addModal = true;
  };

  @action addModalHide = () => {
    this.addModal = false;
    this.addModalData = null;
    this.addModalFile = null;
  };

  @action addModalDataChange = (keyValue, newValue) => {
    this.addModalData[keyValue] = newValue;
  };

  @action addModalFileChange = (file) => {
    // console.log(file);
    this.addModalFile = file;
    if (file) {
      this.addModalData['file_name'] = file.name;
    }
  };

  @action createdVideo = async () => {
    // this.root.loadingShow();
    const { data } = await this.repo.createdVideo(
      this.addModalData,
      this.addModalFile
    );
    // this.root.loadingHide();
    // console.log(data);
    // this.addModalHide();
    // this.funInquiry();
    this.readVideo();
    this.addModalData = {
      title: '',
      contents: '',
      file_name: '',
      file_hash: '',
      register_at: '',
    };
  };

  @observable videoList = [];

  @action readVideo = async () => {
    const {data} = await this.repo.readVideo();
    // console.log(data)
    this.videoList = data
  }

}