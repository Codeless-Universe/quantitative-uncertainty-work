// Import the functions you need from the SDKs you need
import { ProjectConfig } from "@/custom/projectConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(ProjectConfig.firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export const FirebaseHelper = {
  app: app,
  db: db,
};
