import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyC1RCyz_-_V9fqY49qHBDHMwyCQAbkot6o",
    authDomain: "itp-project-606a3.firebaseapp.com",
    databaseURL: "https://itp-project-606a3.firebaseio.com",
    projectId: "itp-project-606a3",
    storageBucket: "itp-project-606a3.appspot.com",
    messagingSenderId: "141467717283",
    appId: "1:141467717283:web:a757418cb6b553165b3916",
    measurementId: "G-5YLVCS3XX4"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
