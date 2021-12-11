import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANx4jrODVYhz6MQert51uUidM55bLtGvw",
  authDomain: "school-attendance-a-4c5ad.firebaseapp.com",
  databaseURL: "https://school-attendance-a-4c5ad-default-rtdb.firebaseio.com",
  projectId: "school-attendance-a-4c5ad",
  storageBucket: "school-attendance-a-4c5ad.appspot.com",
  messagingSenderId: "661800720984",
  appId: "1:661800720984:web:79184515192cc3daaa082d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
