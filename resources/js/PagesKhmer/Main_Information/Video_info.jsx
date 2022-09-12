import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('root')
@observer
export default class video_info extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.videoProvider;
    this.store.addModalShow();
    this.store.readVideo();
  }

  render() {
    const { videoList } = this.store;

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            {videoList &&
              videoList.length > 0 &&
              videoList.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 my-2"
                  >
                    <div>
                      <video
                        src={`/storage/Video/${item.file_hash}`}
                        alt=""
                        width="100%"
                        height="150px"
                        controls
                      />
                    </div>
                    <div>
                      <span>{item.title}</span>
                      <br />
                      <span className="text-secondary">{item.register_at}</span>
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
