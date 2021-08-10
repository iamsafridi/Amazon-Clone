var firebaseConfig = {
  apiKey: "AIzaSyCGOFH2vlV41Gh0BRa2iTVN1GRtxjgusdI",

  authDomain: "clone-bbf34.firebaseapp.com",

  projectId: "clone-bbf34",

  storageBucket: "clone-bbf34.appspot.com",

  messagingSenderId: "33878227861",

  appId: "1:33878227861:web:6a8c8d0a5251430fa5549c",

  measurementId: "G-Q5LXK38KC2",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

firebase.analytics();

var db = firebase.firestore();
