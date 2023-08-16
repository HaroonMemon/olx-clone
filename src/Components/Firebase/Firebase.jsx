// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvZ3Z8Dp5355bzGGEKyMH3JdIH8F_JDUg",
  authDomain: "olx-react-clone01.firebaseapp.com",
  databaseUrl : "https://olx-react-clone01-default-rtdb.firebaseio.com/",
  projectId: "olx-react-clone01",
  storageBucket: "olx-react-clone01.appspot.com",
  messagingSenderId: "1018681267143",
  appId: "1:1018681267143:web:2270ff10fc547fd733bfe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const database = getDatabase(app);
// const database = firebase.database();
// const mainCategoryRef = database.ref("mainCategory");

// export const addMainCategory = (name, imageUrl) => {
//   const newCategory = mainCategoryRef.push();
//   newCategory.set({
//     name,
//     imageUrl,
//   });
// };

export default firebase;





