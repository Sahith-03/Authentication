// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDK9ITKkGgaOBW82-60cZdcwtHumIX3K_o",
//   authDomain: "sign-up-page-53992.firebaseapp.com",
//   projectId: "sign-up-page-53992",
//   storageBucket: "sign-up-page-53992.appspot.com",
//   messagingSenderId: "944168383423",
//   appId: "1:944168383423:web:d626750d90e5aa26b4670a",
//   measurementId: "G-1BYE26563D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDK9ITKkGgaOBW82-60cZdcwtHumIX3K_o",
  authDomain: "sign-up-page-53992.firebaseapp.com",
  projectId: "sign-up-page-53992",
  storageBucket: "sign-up-page-53992.appspot.com",
  messagingSenderId: "944168383423",
  appId: "1:944168383423:web:d626750d90e5aa26b4670a",
  measurementId: "G-1BYE26563D"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;


