import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './components/pages/MainPage';
import SignInPage from './components/pages/SignInPage';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </Router>
    </Provider>
    );
  }
}

export default App;
