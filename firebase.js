import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

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

  export const storage = firebase.storage()
  export const firestore = firebase.firestore();
