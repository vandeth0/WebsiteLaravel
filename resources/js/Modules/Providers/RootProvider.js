import { observable, action } from 'mobx';
import { Repos } from '../Repositorys';
import { QNAProvider, TestData, GalleryProvider, NewsProvider, VideoProvider, BallListProvider, NoticeProvider, SliderPhotoProvider, CheckingWinningProvider, UserLoginProvider, LocationDealerProvider, BallApiProvider } from '.';

export default class RootProvider {
  constructor() {
    this.repo = Repos.rootRepo;
    this.qnaProvider = new QNAProvider(this);
    this.testData = new TestData(this);
    this.galleryProvider = new GalleryProvider(this); 
    this.newsProvider = new NewsProvider(this); 
    this.videoProvider = new VideoProvider(this); 
    this.ballListProvider = new BallListProvider(this); 
    this.noticeProvider = new NoticeProvider(this); 
    this.sliderPhotoProvider = new SliderPhotoProvider(this); 
    this.checkingWinningProvider = new CheckingWinningProvider(this); 
    this.userLoginProvider = new UserLoginProvider(this); 
    this.locationDealerProvider = new LocationDealerProvider(this); 
    this.ballApiProvider = new BallApiProvider(this); 
  }

  // route 설정
  @observable routeHistory = null;

  // 사이드바 상태
  @observable isSidebar = true;

  // 로딩 모달 상태
  @observable isLoading = false;

  // 모바일 기기 체크
  @observable isMobile =
    navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
      ? true
      : false;

  // Firebase Web Push 지원 문제로 iOS 기기 체크
  @observable isIOS =
    navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i)
      ? true
      : false;

  // 사이드바 펼침 상태
  @observable sidebarStatus = this.isMobile ? false : true;

  // 옵션 사이드바 펼침 상태
  @observable optionSidebarStatus = false;

  // 사이드바 펼침 상태 변경
  @action sidebarStatusChange = () => {
    this.sidebarStatus = !this.sidebarStatus;
  };

  // 옵션 사이드바 펼침 상태 변경
  @action optionSidebarStatusChange = () => {
    this.oSidebarProvider.linkEditStatus = false;
    this.optionSidebarStatus = !this.optionSidebarStatus;
  };

  @action setHistory = (history) => {
    this.routeHistory = history;
  };

  @action toggleLoading = () => {
    this.isLoading = !this.isLoading;
  };

  @action loadingShow = () => {
    this.isLoading = true;
  };

  @action loadingHide = () => {
    this.isLoading = false;
  };

  @action lottoShuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  @action lottoNum = () => {
    const nums = [];
    for (let index = 1; index <= 39; index++) {
      nums.push(index);
    }
    for (let index = 1; index <= 50; index++) {
      const lottoList = [];
      this.lottoShuffle(nums);
      lottoList.push(nums[0]);
      lottoList.push(nums[1]);
      lottoList.push(nums[2]);
      lottoList.push(nums[3]);
      lottoList.push(nums[4]);
      lottoList.push(nums[5]);
      lottoList.sort((a, b) => {
        return a - b;
      });
      console.log(lottoList);
    }
  };

  @observable testData = null;
  @observable testData2 = null;

  @action phpTest = async () => {
    const { data } = await this.repo.phpTest();
    console.log(data)
    this.testData = data;
  }

  @action phpTest2 = async () => {
    const { data } = await this.repo.phpTest2();
    console.log(data)
    this.testData2 = data
  }

  // @observable currentWinningNum = 13;

  // @action testFun = (testValue) => {
  //   this.currentWinningNum = testValue;
  // }
}
