// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKHS6tWuxDAO2QT2whIMKVD713uY1sF4A",
  authDomain: "blog-front-e9422.firebaseapp.com",
  projectId: "blog-front-e9422",
  storageBucket: "blog-front-e9422.appspot.com",
  messagingSenderId: "416914341703",
  appId: "1:416914341703:web:404c50df622d87a3869662",
  measurementId: "G-2LFDVKKXS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);