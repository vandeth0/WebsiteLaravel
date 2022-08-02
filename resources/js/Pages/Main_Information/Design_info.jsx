import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('root')
@observer
export default class design_info extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.galleryProvider;
    this.store.addModalShow();
    this.store.readGallery();
  }
  render() {
    const { galleryList } = this.store;
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            {galleryList &&
              galleryList.length > 0 &&
              galleryList.map((item, idx) => {
                return (
                  <div
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 my-2"
                    key={`gallery-idx${idx}`}
                  >
                    <div>
                      <img
                        className=""
                        src={`/storage/Gallery/${item.file_hash}`}
                        width="100%"
                        alt=""
                        height="250px"
                      />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <span
                        className="text-secondary"
                        style={{ whiteSpace: 'normal' }}
                      >
                        {item.contents}
                      </span>
                      <br />
                      <span className="text-info">{item.register_at}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
