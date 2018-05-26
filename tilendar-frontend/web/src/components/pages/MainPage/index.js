import React, { Component } from 'react';
import Header from '../../../components/organisms/Header';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

export default MainPage;
