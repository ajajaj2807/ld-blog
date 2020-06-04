import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBzd5MEXPuMrJGCjrnk38vDaCHU6Aq1J2o",
  authDomain: "ld-blog-42a9f.firebaseapp.com",
  databaseURL: "https://ld-blog-42a9f.firebaseio.com",
  projectId: "ld-blog-42a9f",
  storageBucket: "ld-blog-42a9f.appspot.com",
  messagingSenderId: "194357544687",
  appId: "1:194357544687:web:20446cc27047f2ad563d1a",
};

//firebase.initializeApp(firebaseConfig);
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()