import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();
const data = firestore
  .collection('user')
  .doc('CGiwmtToMdQ1asgzHt0CFfFWtMM2')
  .collection('cartItems')
  .doc('CGiwmtToMdQ1asgzHt0CFfFWtMM2')
  .collection('jackets')
  .doc('CGiwmtToMdQ1asgzHt0CFfFWtMM2');

const data1 = firestore.doc(
  '/user/CGiwmtToMdQ1asgzHt0CFfFWtMM2/cartitems/CGiwmtToMdQ1asgzHt0CFfFWtMM2/jackets/CGiwmtToMdQ1asgzHt0CFfFWtMM2'
);

const data2 = firestore.collection(
  '/user/CGiwmtToMdQ1asgzHt0CFfFWtMM2/cartitems/CGiwmtToMdQ1asgzHt0CFfFWtMM2/jackets'
);
