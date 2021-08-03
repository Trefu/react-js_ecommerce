import firebase from 'firebase/app';
import '@firebase/firestore';
import { default as firebaseConfig } from './FirebaseConfig.json';
import { default as firebaseCollections } from './FirebaseCollections.json';

export const FIREBASE = firebase.initializeApp(firebaseConfig);
export const FIRESTORE = firebase.firestore(FIREBASE);
export const FIRESTORE_COLLECTIONS = firebaseCollections;