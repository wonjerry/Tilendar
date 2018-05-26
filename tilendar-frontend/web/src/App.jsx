import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './components/pages/MainPage';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </Router>
    </Provider>
    );
  }
}

export default App;
