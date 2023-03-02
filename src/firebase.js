// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDPYe5AdLfR9XLkF9Z-R3VYtHLUN1i826g",
	authDomain: "realtor-clone-react-3da87.firebaseapp.com",
	projectId: "realtor-clone-react-3da87",
	storageBucket: "realtor-clone-react-3da87.appspot.com",
	messagingSenderId: "355055039498",
	appId: "1:355055039498:web:99ad2ba24c0a3fc7069bf3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
