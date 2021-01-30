import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm06BYaIdBGVtOeYAx5KZr0GqC5BtyCGc",
  authDomain: "facebook-clone-a5984.firebaseapp.com",
  projectId: "facebook-clone-a5984",
  storageBucket: "facebook-clone-a5984.appspot.com",
  messagingSenderId: "651283986012",
  appId: "1:651283986012:web:2969d9db77e5a9dec75899",
  measurementId: "G-WC6JQBRFF6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
