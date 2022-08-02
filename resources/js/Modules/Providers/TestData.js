// import { observable, action } from 'mobx';
// import { Repos } from '../Repositorys';
// export default class TestData {
//   constructor(root){
//     this.root = root;
//     this.repo = Repos.testData;
//   }




//   @observable inputTestData = "";

//   @action inputTestDataChange = newTestData => {
//     this.inputTestData = newTestData;
//   }

//   @action createdTestData = async () => {
//     const {data} = await this.repo.createdTestData(this.inputTestData)
//     console.log(data)
//     // this.readQNA();
//   }

//   // @action createdQNA = async () => {
//   //   const {data} = await this.repo.createdQNA(this.inputQNA)
//   //   console.log(data)
//   //   this.readQNA();
//   // }

//   // @observable qnaList = [];

//   // @action readQNA = async () => {
//   //   const {data} = await this.repo.readQNA();
//   //   console.log(data)
//   //   this.qnaList = data
//   // }
// }




// import { observable, action } from 'mobx';
// import { Repos } from '../Repositorys'
// export default class TestData{
//   constructor(root){
//     this.root = root;
//     this.repo = Repos.testData;
//   }

//   @observable inputTestData = "";

//   @action inputTestDataChange = newTestData =>{
//     this.inputTestData = newTestData;
//   }
//   @action createdTestData = async () => {
//     const {data} = await this.repo.createdTestData(this.inputTestData)
//     console.log(data);
//     this.readTestData();
//     this.inputTestData = "";
//   }

//   @observable testDataList = [];

//   @action readTestData = async () => {
//     const {data} = await this.repo.readTestData();
//     console.log(data)
//     this.testDataList = data
//   }


// }
// import { observable, action } from 'mobx';
// import { Repos } from '../Repositorys'

// export default class TestData {
//   constructor(root){
//     this.root = root;
//     this.repo = Repos.testData;
//   }

//   @observable inputTestData = "";

//   @action inputTestDataChange = newTestData => {
//     this.inputTestData = newTestData;
//   }

//   @action createdTestData = async () =>{
//     const {data} = await this.repo.createdTestData(this.inputTestData);
//     console.log(data);
//   }
// }
import { observable, action } from "mobx";
import { Repos } from "Modules/Repositorys";

export default class TestData {
  constructor(root){
    this.root = root;
    this.repo = Repos.testData
  }

  @observable inputTestData = "";
  @action inputTestDataChange = newTestData => {
    this.inputTestData = newTestData;
  }

  @action createdTestData = async () => {
    const {data} = await this.repo.createdTestData(this.inputTestData);
    console.log(data);
    this.inputTestData = '';
  }
  @observable testDataList = [];

  @action readTestData = async () => {
    const {data} = await this.repo.readTestData();
    console.log(data)
    this.testDataList = data
  }


}