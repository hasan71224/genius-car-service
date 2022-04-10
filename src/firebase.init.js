// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4BgxnWexwMFYNNwYxQN383rkOX6Q3t2I",
  authDomain: "genius-car-services-e0bd4.firebaseapp.com",
  projectId: "genius-car-services-e0bd4",
  storageBucket: "genius-car-services-e0bd4.appspot.com",
  messagingSenderId: "60528216556",
  appId: "1:60528216556:web:8129a7c647c4184ec518c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;