import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

const config = {
  apiKey: 'AIzaSyB8wmmPR3-ibdeSSRbxQqzu94iztPPs9D0',
  authDomain: 'crwn-clothing-2022.firebaseapp.com',
  projectId: 'crwn-clothing-2022',
  storageBucket: 'crwn-clothing-2022.appspot.com',
  messagingSenderId: '252433065723',
  appId: '1:252433065723:web:d5f6f69466566ce377725e',
  measurementId: 'G-XTMHSBJNTD',
};

firebase.initializeApp(config);
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

export const auth = firebase.auth();
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

export const firestore = firebase.firestore();
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// we created this function here as all related import regarding
// fireStore ,firbase is here in this file.

export const createUserProfileDocument = async (
  userDataFromAuthState,
  additionalData
) => {
  console.log(userDataFromAuthState);

  // all user details that are not saved to cloud
  // ➖➖➖condition 1 ➖➖➖
  // if received user from onAuthStateChange is Null then returned nothing

  if (!userDataFromAuthState) return;

  // ➖➖➖ condition 2 ➖➖➖

  /* if user exists on fireStore database then get user id from above 
    received data (i.e.-userDataFromAuthState) form this id we save data 
  to firestore for future reference. 
  With the help of this id (UID property) we get data from firebase store in from of 
  Snapshot. if Snapshot exists then User data is available on Cloud or fireStore.
  if SnapShot exists property is false ,then take user data and upload to cloud */

  const userRef = firestore.doc(`user/${userDataFromAuthState.uid}`);
  console.log(userRef);

  // this is collection reference not item snapshot
  // get DocumentReference from user UID property on user Data
  // and apply .get() method which returned a promise
  // and firther via await we get snapshot of user.
  // to ensure data on server is availbable or not.

  const snapShotUserData = await userRef.get();
  console.log(snapShotUserData);

  /* if DocumentSnapshot.exists=false then create user data and upload */

  /* ➖➖➖to store Data to fireStore/upload ➖➖➖ */

  if (!snapShotUserData.exists) {
    const { displayName, email } = userDataFromAuthState;
    const createdAt = new Date(); // also upload created date

    // use (.set()) method to upload data
    // both .set() and .get() method available on DocumentReference
    // .set() method return promise thats why we use try/catch method
    // to handle Promise.

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error in creating user', error.message);
    }
  }
  return userRef;

  // async function return a promise
  // we can use this userRef somewhere else to get data ot to store data
  // to our app/local storage.
  // in App.js we confirm our data is updated or not by applying Snapshot
  // method on this DocumentReference object.
};

export default firebase;
