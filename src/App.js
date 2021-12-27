import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage/shop-page.components';
import { Header } from './components/header/header.component';
import {SignInSignOut} from './pages/SignIn-and-SignUp/signIn-and-signUp.components'

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route path='/signin' component={SignInSignOut}></Route>
    </Switch>
    </div>
  );
}

export default App;
