// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faAlignLeft,
//   faBars,
//   faCaretDown,
//   faCoffee,
//   faFile,
//   faGlobe,
//   faPlus,
//   faUser,
// } from '@fortawesome/free-solid-svg-icons';
// import { inject, observer } from 'mobx-react';

// @inject('root')
// @observer
// export default class TestData extends Component {
//   constructor(props) {
//     super(props);
//     this.store = props.root.testData;
//   }
//   render() {
//     const { inputTestData } = this.store;
//     return (
//       <div>
//         <div className="input-group">
//           <span className="input-group-text">
//             <FontAwesomeIcon icon={faFile} />
//           </span>
//           <input
//             value={inputTestData}
//             type="text"
//             placeholder="Comment Anything..."
//             name=""
//             id=""
//             className="form-control"
//             onChange={(e) => {
//               e.stopPropagation();
//               const { value } = e.target;
//               this.store.inputTestDataChange(value);
//             }}
//           />
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               const confirmCheck = confirm('Save Msg?');
//               if (confirmCheck === true) {
//                 this.store.createdTestData();
//               }
//             }}
//             className="btn btn-warning"
//           >
//             <FontAwesomeIcon icon={faPlus} /> Submit
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faAlignLeft,
//   faBars,
//   faCaretDown,
//   faCoffee,
//   faComment,
//   faFile,
//   faGlobe,
//   faPlus,
//   faUser,
// } from '@fortawesome/free-solid-svg-icons';
// import { inject, observer } from 'mobx-react';

// @inject('root')
// @observer
// export default class TestData extends Component {
//   constructor(props) {
//     super(props);
//     this.store = props.root.testData;
//     this.store.readTestData();
//   }
//   render() {
//     const { inputTestData, testDataList } = this.store;
//     return (
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-12">
//             <h4>Question and Answer</h4>
//             <p>Comment Anything Below</p>
//             <div className="input-group">
//               <form action="#">
//                 <span className="input-group-text bg-success text-light">
//                   <FontAwesomeIcon icon={faComment} />
//                 </span>
//                 <input
//                   value={inputTestData}
//                   type="text"
//                   placeholder="Comment Anything..."
//                   name=""
//                   id=""
//                   className="form-control"
//                   onChange={(e) => {
//                     e.stopPropagation();
//                     const { value } = e.target;
//                     this.store.inputTestDataChange(value);
//                   }}
//                 />
//                 <button
//                   type="submit"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     // const confirmCheck = confirm('Save MSG');
//                     // if (confirmCheck === true) {
//                     this.store.createdTestData();
//                     // }
//                   }}
//                   className="btn btn-info text-light"
//                 >
//                   <FontAwesomeIcon icon={faPlus} /> Submit
//                 </button>
//               </form>
//             </div>
//             <hr />
//             {testDataList &&
//               testDataList.length > 0 &&
//               testDataList.map((item, idx) => {
//                 return (
//                   <div key={`qna-idx${idx}`} className="border my-2">
//                     <div className="card-header bg-primary text-light">
//                       <FontAwesomeIcon icon={faUser} className="test-light" /> |
//                       User Name
//                     </div>
//                     <div className="card-body">{item.comment}</div>
//                     <div className="card-footer">{item.created_at}</div>
//                   </div>
//                 );
//               })}
//             {/* <input type="file" /> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('root')
@observer
export default class TestData extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.testData;
    this.store.readTestData();
  }
  render() {
    const { inputTestData, testDataList } = this.store;
    return (
      <div>
        <div className="container">
          <h1>Comment Anythings</h1>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="Comment Anythings You Want..."
              value={inputTestData}
              onChange={(e) => {
                e.stopPropagation();
                const { value } = e.target;
                this.store.inputTestDataChange(value);
              }}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                this.store.createdTestData();
              }}
            >
              Comment
            </button>
          </div>
          <hr />

          {testDataList &&
            testDataList.length > 0 &&
            testDataList.map((item, idx) => {
              return (
                <div key={`qna-idx${idx}`}>
                  <div className="card-header bg-success text-light">
                    Name User
                  </div>
                  <div className="card-body">{item.comment}</div>
                  <div className="card-footer">{item.created_at}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
