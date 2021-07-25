import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDUIbckicKF_G63EM9wOtS7RdEJ6ZqVhWA",
  authDomain: "b-days-87319.firebaseapp.com",
  databaseURL: "https://b-days-87319-default-rtdb.firebaseio.com",
  projectId: "b-days-87319",
  storageBucket: "b-days-87319.appspot.com",
  messagingSenderId: "243249385471",
  appId: "1:243249385471:web:b51a5e051dbe6106a161ca",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

export { auth, database, firebase, storage };