import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: "mass-61e60.firebaseapp.com",
   databaseURL: "https://mass-61e60.firebaseio.com",
   projectId: "mass-61e60",
   storageBucket: "mass-61e60.appspot.com",
   messagingSenderId: "918311482534",
   appId: "1:918311482534:web:8a185759c2e3dcf9243067"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;