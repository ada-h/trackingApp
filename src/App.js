import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './home'
import About from './about'
import Tracking from './tracking'
import Quote from './quote'
import Shipping from './shipment'
import Dashboard from './dashboard'


import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'


import combineReducers from './redux/reducers'

const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/tracking' component={Tracking}></Route>
          <Route exact path='/quote' component={Quote}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path = '/create shipping' component={Shipping}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
