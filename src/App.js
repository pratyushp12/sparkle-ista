import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage/shop-page.components';
import { Header } from './components/header/header.component';
import {SignInSignOut} from './pages/SignIn-and-SignUp/signIn-and-signUp.components'
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unSubscribeFromAuth=null;

  componentDidMount(){
   this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{this.setState({currentUser:user})
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route path='/signin' component={SignInSignOut}></Route>
    </Switch>
    </div>
  );
  }
}

export default App;
