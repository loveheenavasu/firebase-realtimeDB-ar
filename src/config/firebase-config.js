// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCitURRA1XPd72gXLrwJ0cdzFDW0qH_tjQ",
  authDomain: "js-session.firebaseapp.com",
  projectId: "js-session",
  databaseURL: "https://js-session-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "js-session.appspot.com",
  messagingSenderId: "506169058347",
  appId: "1:506169058347:web:a7ae82a868a295b0a9766e",
  measurementId: "G-T1DQ3EH1WT"
};

// // create a function to add two numbers
// function addTwoNumbers(a,b){
//   return a+b;
// }

// create a function that generate 10 random words of 5 letter each and return an array of length 10
 export function createRandomWords(){
  var words = [];
  for(var i=0; i<10; i++){
    words.push(Math.random().toString(36).substring(7));
  }
  return words;
}





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);