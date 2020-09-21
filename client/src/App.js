import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {Provider} from 'react-redux';
import {setCurrentUser, logoutUser} from './actions/authActions';

import Login from './components/Login';
import Welcome from './components/Welcome';
import store from './store'; 
import './App.css';
import { clearCurrentUser } from './actions/expenseAction';

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const CurrentTime=Date.now()/1000;
  if(decoded.exp < CurrentTime){
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentUser());
    window.location.href = '/login';
  }
}

class App extends Component{
  render (){
      return(
        <Provider store ={store}>
          <Router>
            <div className="App">
                <Route exact path='/' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/Welcome' component={Welcome} />
            </div>
            </Router>
          </Provider>
      );
  }
} 

export default App;
