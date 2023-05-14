const firebaseConfig = {
    apiKey: "AIzaSyCF0BjB76RsOCSI6MuVcXgBmZzCOCyDuR0",
    authDomain: "gradprok.firebaseapp.com",
    projectId: "gradprok",
    storageBucket: "gradprok.appspot.com",
    messagingSenderId: "453015684578",
    appId: "1:453015684578:web:454bb482bf9c0e5318a5bb",
    measurementId: "G-LFGTPT0RGF"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = firebase.database();
  
  // Add a new user to the "users" collection
  function addUser(username, password, email, private_key, btc_address) {
    const newRef = database.ref('users').push();
    newRef.set({
      username: username,
      password: password,
      email: email,
      private_key: private_key,
      btc_address: btc_address
    });
  }