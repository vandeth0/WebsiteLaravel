import React, { Component } from 'react';

export default class TestSub extends Component {
  render() {
    const { number } = this.props;
    return <div>TEST Sub {number}</div>;
  }
}
