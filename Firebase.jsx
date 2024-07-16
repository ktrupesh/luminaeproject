import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Config from './Config';

firebase.initializeApp(Config);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };