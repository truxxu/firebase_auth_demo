import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBCMM9VNWjCtUvnrVAPDN6sc4AbRPLD-jo",
  authDomain: "auth-demo-5f8b2.firebaseapp.com",
  databaseURL: "https://auth-demo-5f8b2.firebaseio.com",
  projectId: "auth-demo-5f8b2",
  storageBucket: "auth-demo-5f8b2.appspot.com",
  messagingSenderId: "1053788819614",
  appId: "1:1053788819614:web:650c1d19211f21fba1eb8f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
