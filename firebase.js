// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBQRYIqi9MGhsd6K9y2v4JHa9XN8oHZQOE",
    authDomain: "tutorial-vuejs-2becd.firebaseapp.com",
    projectId: "tutorial-vuejs-2becd",
    storageBucket: "tutorial-vuejs-2becd.firebasestorage.app",
    messagingSenderId: "1068237921098",
    appId: "1:1068237921098:web:7f1ab961e02a8675f67fb3",
    databaseURL:"https://tutorial-vuejs-2becd-default-rtdb.asia-southeast1.firebasedatabase.app"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database()
  const kelasRef = database.ref('kelas');