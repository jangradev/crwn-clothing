import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Redirect, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';
import { createUserProfileDocument } from '../src/firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
class App extends React.Component {
  unsubscribedFromAuth = null;
  //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  componentDidMount() {
    const { setCurrentUserOnProps } = this.props;
    //console.log(typeof setCurrentUserOnProps);

    this.unsubscribedFromAuth = auth.onAuthStateChanged(async (userDataFromAuthState) => {
      if (userDataFromAuthState) {
        const receivedData = await createUserProfileDocument(userDataFromAuthState);

        receivedData.onSnapshot((snapShot) => {
          setCurrentUserOnProps({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUserOnProps(userDataFromAuthState);
      }
    });
  }
  //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
  componentWillUnmount() {
    this.unsubscribedFromAuth();
    console.log('log out');
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/login'
            render={() =>
              this.props.currentUserOnProps ? <Redirect to='/' /> : <SignInSignOut />
            }
          />
        </Switch>
      </div>
    );
  }
}
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    currentUserOnProps: state.user.currentUser,
  };
};

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
const mapDispatchToProps = (dispatch) => ({
  setCurrentUserOnProps: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
