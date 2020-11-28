import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAaCvLlBCPV8PSvJSCbtCh1K9OPdlUmb9M",
  authDomain: "clothing-d2974.firebaseapp.com",
  databaseURL: "https://clothing-d2974.firebaseio.com",
  projectId: "clothing-d2974",
  storageBucket: "clothing-d2974.appspot.com",
  messagingSenderId: "145068338023",
  appId: "1:145068338023:web:746eae116aa48153a11dc2",
  measurementId: "G-J6N9TLC4WB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
