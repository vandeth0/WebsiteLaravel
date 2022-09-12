import RootRepo from "./RootRepo";
import QNARepo from './QNARepo'
import TestDataRepo from "./TestDataRepo";
import GalleryRepo from "./GalleryRepo";
import NewsRepo from "./NewsRepo";
import VideoRepo from "./VideoRepo";
import BallListRepo from "./BallListRepo";
import NoticeRepo from "./NoticeRepo";
import SliderPhotoRepo from "./SliderPhotoRepo";
import UserLoginRepo from "./UserLoginRepo";
import LocationDealerRepo from "./LocationDealerRepo";
import BallApiRepo from "./BallApiRepo";


export const Repos = {
  rootRepo: new RootRepo(),
  qnaRepo: new QNARepo(),
  testData: new TestDataRepo(),
  galleryRepo: new GalleryRepo(),
  newsRepo: new NewsRepo(),
  videoRepo: new VideoRepo(),
  ballListRepo: new BallListRepo(),
  noticeRepo: new NoticeRepo(),
  sliderPhotoRepo: new SliderPhotoRepo(),
  userLoginRepo: new UserLoginRepo(),
  locationDealerRepo: new LocationDealerRepo(),
  ballApiRepo: new BallApiRepo(),

}