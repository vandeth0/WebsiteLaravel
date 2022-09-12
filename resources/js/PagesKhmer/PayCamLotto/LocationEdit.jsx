import { inject, observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';

@inject('root')
@observer
export default class LocationEdit extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.locationDealerProvider;
    // this.store.editModalShow();
  }
  render() {
    const { editModalData } = this.store;
    return (
      <Fragment>
        <div className="input-group">
          <span className="input-group-text">Store ID</span>
          <input
            type="text"
            className="form-control"
            value={editModalData.storeId}
            onChange={(e) => {
              e.stopPropagation();
              const { value } = e.target;
              this.store.editModalDataChange('storeId', value);
            }}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Shop Name</span>
          <input
            type="text"
            className="form-control"
            value={editModalData.shopName}
            onChange={(e) => {
              e.stopPropagation();
              const { value } = e.target;
              this.store.editModalDataChange('shopName', value);
            }}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Name Dealer</span>
          <input
            type="text"
            className="form-control"
            value={editModalData.nameDealer}
            onChange={(e) => {
              e.stopPropagation();
              const { value } = e.target;
              this.store.editModalDataChange('nameDealer', value);
            }}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Phone</span>
          <input
            type="text"
            className="form-control"
            value={editModalData.phone}
            onChange={(e) => {
              e.stopPropagation();
              const { value } = e.target;
              this.store.editModalDataChange('phone', value);
            }}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Lat</span>
          <input
            type="text"
            className="form-control"
            value={editModalData.lat}
            onChange={(e) => {
              e.stopPropagation();
              const { value } = e.target;
              this.store.editModalDataChange('lat', value);
            }}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Lng</span>
          <input
            type="text"
            className="form-control"
            value={editModalData.lng}
            onChange={(e) => {
              e.stopPropagation();
              const { value } = e.target;
              this.store.editModalDataChange('lng', value);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            const confirmCheck = confirm('Save?');
            if (confirmCheck === true) {
              this.store.updatedLocation();
            }
          }}
          className="btn btn-success my-3"
        >
          Update
        </button>
      </Fragment>
    );
  }
}
