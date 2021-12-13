import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3IThP3xdCA3vg1YZ4U1G_Ph7M_xDmrZI",
  authDomain: "uber-clone-21c5a.firebaseapp.com",
  projectId: "uber-clone-21c5a",
  storageBucket: "uber-clone-21c5a.appspot.com",
  messagingSenderId: "494631111126",
  appId: "1:494631111126:web:170cca645376e5f1a03c77",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { auth, provider, app };
