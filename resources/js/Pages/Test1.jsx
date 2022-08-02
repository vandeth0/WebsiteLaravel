// import React, { Component } from 'react';

// export default class Text1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemData: [],
//       isLoadedAright: false,
//     };
//   }
//   componentDidMount() {
//     fetch(
//       'https://dz7xznd6wwkpqsn9xocyeq.on.drv.tw/Files-v1/v1.1 ball-json file.json'
//       // 'http://vandeth009.great-site.net/v1.1 ball-json file.json'
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           isLoadedAright: true,
//           itemData: json,
//         });
//       });
//   }
//   render() {
//     var { isLoadedAright, itemData } = this.state;

//     if (!isLoadedAright) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul className="list-unstyled">
//           {itemData.map((item) => (
//             <li key={item.id} className="my-1">
//               <span className="text-danger">{item.dateDraw}</span> <br />
//               {item.num1} | {item.num2} | {item.num3} | {item.num4} |{' '}
//               {item.num5}| {item.num6} | + | {item.bonus}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('root')
@observer
export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.galleryProvider;
    this.store.addModalShow();
    this.store.readGallery();
  }
  render() {
    const { addModalData, gallertList } = this.store;
    return (
      <div>
        <input
          className="form-control"
          type="text"
          value={addModalData.title}
          placeholder="Title"
          onChange={(e) => {
            e.stopPropagation();
            const { value } = e.target;
            this.store.addModalDataChange('title', value);
          }}
        />
        <input
          className="form-control"
          type="textarea"
          value={addModalData.contents}
          placeholder="Contents"
          style={{ height: 150 }}
          onChange={(e) => {
            e.stopPropagation();
            const { value } = e.target;
            this.store.addModalDataChange('contents', value);
          }}
        />
        <input
          className="border-0"
          type="file"
          onChange={(e) => {
            e.stopPropagation();
            const file = e.target.files[0];
            this.store.addModalFileChange(file);
          }}
        />
        <button
          className="ms-1"
          color="primary"
          disabled={
            addModalData && addModalData.title && addModalData.contents
              ? false
              : true
          }
          onClick={(e) => {
            e.stopPropagation();
            const confirmCheck = confirm('Save?');
            if (confirmCheck === true) {
              this.store.createdGallery();
            }
          }}
        >
          Save File
        </button>
        <hr />
        {gallertList &&
          gallertList.length > 0 &&
          gallertList.map((item, idx) => {
            return (
              <div key={`gallery-idx${idx}`}>
                <img
                  className=""
                  src={`/storage/Gallery/${item.file_hash}`}
                  width="300px"
                  alt=""
                />
                <h1>{item.title}</h1>
                <p>{item.contents}</p>
                <div className="card-footer">{item.register_at}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
