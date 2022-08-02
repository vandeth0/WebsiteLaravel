import { observable, action, computed } from 'mobx';
import { Repos } from '../Repositorys';

export default class NoticeProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.noticeRepo;
  }
  @observable NoticeList = {
    start: '',
    end: '',
  };

  @action changeNoticeList = (valueStart, valueEnd) => {
    this.NoticeList['start'] = valueStart
    this.NoticeList['end'] = valueEnd
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

  @action createdNotice = async () => {
    const { data } = await this.repo.createdNotice(
      this.addModalData,
      this.addModalFile
    );
    // console.log(data);
    this.readNotice();
    this.addModalData = {
      title: '',
      contents: '',
      file_name: '',
      file_hash: '',
      register_at: '',
    };
  };

// ==========================Edit=====================
// @observable editModal = false;
@observable editModalData = {
    id: '',
    title: '',
    contents: '',
    file_name: '',
    file_hash: '',
    register_at: '',
    
  };

@observable editModalFile = null;
  @action editModalShow = (mList) => {
    this.editModalData = {
      id: mList.id,
      title: mList.title,
      contents: mList.contents,
      file_name: mList.file_name,
      file_hash: mList.file_hash,
      register_at: mList.register_at,
      
    };
    this.editModalFile = null;
    // this.editModal = true;
  }; 

  @action editModalDataChange = (valueKey, newValue) => {
    this.editModalData[valueKey] = newValue;
  };

  @action editModalFileChange = (file) => {
    this.editModalFile = file;
    if (file) {
      this.editModalData['file_name'] = file.name;
    }
  };

  @action updatedNotice = async () => {
    const {data} = await this.repo.updatedNotice(this.editModalData, this.editModalFile);
    this.readNotice();
    // this.readGallery();
    // console.log(data)
    
  };
// ==========================Edit=====================
 @observable previousNotice = 0;

  @action previousNoticeChange = (data) => {
    this.previousNotice--;
    // console.log(this.previousNotice)
  }
  @action nextNoticeChange = (data) => {
    this.previousNotice++;
    // console.log(this.previousNotice)
  }
  @observable NextNotice = 5;
  @action nextNoticeChangeValue = (x) => {
    this.NextNotice += x;
    // console.log(this.NextNotice)
  }

  @observable noticeList = [];

  @action readNotice = async () => {
    const {data} = await this.repo.readNotice();
    // console.log(data)
    this.noticeList = data
  }


  @observable noticeListNext = {
    start: 0,
    end: 5,
  }

  @action noticeCommentChange = (valueStart, valueEnd) => {
    this.noticeListNext['start'] = valueStart,
    this.noticeListNext['end'] = valueEnd
  }

  @action deletedNotice = async (mList) => {
    // this.root.loadingShow();
    await this.repo.deletedNotice(mList);
    // this.root.loadingHide();
    this.readNotice();
  };




}







