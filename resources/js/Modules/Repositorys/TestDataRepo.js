// import autobind from 'autobind-decorator'
// import Axios from "axios";

// export default class TestDataRepo {
//   URL = '/api/TestData';
//   constructor(url) {
//     this.URL = url || this.URL;
//   }

//   @autobind
//   async createdTestData(addData) {
//     return await Axios.post(`${this.URL}/created`, {addData}).catch((reason) => {
//       console.log(reason)
//       console.log(reason.response)
//     })
//   }
//   @autobind
//   async readTestData(){
//     return await Axios.post(`${this.URL}/read`).catch((reason) => {
//       console.log(reason)
//       console.log(reason.response)
//     })
//   }

// }

// import autobind from "autobind-decorator";
// import Axios from "axios";

// export default class TestDataRepo {
//   URL = '/api/TestData';
//     constructor(url) {
//       this.URL = url || this.URL;
//     }

//     @autobind
//       async createdTestData(addData) {
//         return await Axios.post(`${this.URL}/created`, {addData}).catch((reason) => {
//           console.log(reason)
//           console.log(reason.response)
//         })
//       }
// }
import autobind from "autobind-decorator";
import Axios from "axios";

export default class TestDataRepo {
  URL = '/api/TestData';
    constructor(url){
      this.URL = url || this.URL;
    }

    @autobind
    async createdTestData(addData) {
      return await Axios.post(`${this.URL}/created`, {addData}).catch((reason) => {
        console.log(reason)
        console.log(reason.response)
        this.readTestData();
      })
    }
    @autobind
    async readTestData(){
      return await Axios.post(`${this.URL}/read`).catch((reason) => {
        console.log(reason)
        console.log(reason.response)
      })
    }



}

