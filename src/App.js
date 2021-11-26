import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Switch, Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage/shop-page.components';


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
    </Switch>
    </div>
  );
}

export default App;
