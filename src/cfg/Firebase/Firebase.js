import firebase from 'firebase/app';
import '@firebase/firestore';
import { default as firebaseConfig } from './FirebaseConfig.json';

export const FIREBASE = firebase.initializeApp(firebaseConfig);
export const FIRESTORE = firebase.firestore(FIREBASE);