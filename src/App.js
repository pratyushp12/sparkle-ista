import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ShopPage from './pages/ShopPage/shop-page.components';
import Header from './components/header/header.component';
import {SignInSignOut} from './pages/SignIn-and-SignUp/signIn-and-signUp.components'
import {auth,createUserProfileData} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {

  unSubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
   this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{

    if(userAuth){
      const userRef=await createUserProfileData(userAuth);

      userRef.onSnapshot(snapShot=>{
        setCurrentUser(
          {
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
      })
    }
    setCurrentUser(userAuth)
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'></Redirect>):(<SignInSignOut />)}></Route>
    </Switch>
    </div>
  );
  }
}

const mapStateToProps = ({user})=>({
currentUser:user.currentUser,
})

const mapDispatchToProps = dispatch =>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
