import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0sqCe7RWddP8nUJx8YmSJOLb-jZx8VA8",
    authDomain: "ecommerce-90a58.firebaseapp.com",
    databaseURL: "https://ecommerce-90a58.firebaseio.com",
    projectId: "ecommerce-90a58",
    storageBucket: "ecommerce-90a58.appspot.com",
    messagingSenderId: "1098068062014",
    appId: "1:1098068062014:web:9fa934a506edaac952066f",
    measurementId: "G-XZLD1F0NPJ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    // console.log(firestore.doc('users/123test'));

    // const userRef = firestore.doc('users/123test')
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    console.log(snapShot)

    if (!snapShot.exists){
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }
      catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;