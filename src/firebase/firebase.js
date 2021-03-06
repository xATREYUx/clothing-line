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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
