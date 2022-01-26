import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';
import { createUserProfileDocument } from '../src/firebase/firebase.utils';

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribedFromAuth = null;

  //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  // userDataFromAuthState will be Null if sinout

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userDataFromAuthState) => {
      if (userDataFromAuthState) {
        const receivedData = await createUserProfileDocument(userDataFromAuthState);

        // call this function by passing snapShotUserData into this
        // this function returned a promise of snapShotUserData
        // this is same data receivedData=userRef
        //console.log(receivedData);

        /* ➖➖➖to store Data to app state ➖➖➖ */

        // .onSnapshot() method set to DocumentReference object to get realTime update of user data
        // as snapShot already has only id property ,not any other informaation exists on it.
        // to get other information we use .get() method on it.

        receivedData.onSnapshot((snapShot) => {
          this.setState({ currentUser: { id: snapShot.id, ...snapShot.data() } });
          console.log('logged in user');
          console.log(this.state.currentUser.displayName);
        });
      } else {
        //if user sinout then it receive Null
        this.setState({ currentUser: userDataFromAuthState });
      }
    });
  }

  //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

  componentWillUnmount() {
    this.unsubscribedFromAuth();
    console.log('log out');
  }
  //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
