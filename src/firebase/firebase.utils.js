import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
