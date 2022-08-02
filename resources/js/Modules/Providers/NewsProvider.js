import { observable, action, computed } from 'mobx';
import { Repos } from '../Repositorys';

export default class NewsProvider {
  constructor(root) {
    this.root = root;
    this.repo = Repos.newsRepo;
  }
  @observable newsShowList = {
    start: '',
    end: ''
  }
  @action changeNewsShowList = (valueStart, valueEnd) => {
    this.newsShowList['start'] = valueStart
    this.newsShowList['end'] = valueEnd
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

  @action createdNews = async () => {
    // this.root.loadingShow();
    const { data } = await this.repo.createdNews(
      this.addModalData,
      this.addModalFile
    );
    // this.root.loadingHide();
    // console.log(data);
    // this.addModalHide();
    // this.funInquiry();
    this.readNews();
    this.addModalData = {
      title: '',
      contents: '',
      file_name: '',
      file_hash: '',
      register_at: '',
    };
  };

  @observable newsList = [];

  @action readNews = async () => {
    const {data} = await this.repo.readNews();
    // console.log(data)
    this.newsList = data
  }

  @observable newsListNext = {
    start: 0,
    end: 5,
  }

  @action newsCommentChange = (valueStart, valueEnd) => {
    this.newsListNext['start'] = valueStart,
    this.newsListNext['end'] = valueEnd
  }

  @observable previousNews = 0;

  @action previousNewsChange = (data) => {
    this.previousNews--;
    // console.log(data)
  }
  @action nextNewsChange = (data) => {
    this.previousNews++;
    // console.log(data)
  }
  @observable NextNews = 5;
  @action nextNewsChangeValue = (x) => {
    this.NextNews += x;
    // console.log(this.NextNews)
  }


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

@action updatedNews = async () => {
  const {data} = await this.repo.updatedNews(this.editModalData, this.editModalFile);
  // this.readGallery();
  // console.log(data)
  
};
// ==========================Edit=====================

@action deletedNews = async (mList) => {
  // this.root.loadingShow();
  await this.repo.deletedNews(mList);
  // this.root.loadingHide();
  this.readNews();
};









}