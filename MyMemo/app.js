(function(){
	const config = {
    apiKey: "AIzaSyD9Wn1bttt5xnLYB3VwT6xNBYRjswizWYw",
    authDomain: "mymemo-2d3f9.firebaseapp.com",
    databaseURL: "https://mymemo-2d3f9.firebaseio.com",
    projectId: "mymemo-2d3f9",
    storageBucket: "mymemo-2d3f9.appspot.com",
    messagingSenderId: "403020752709"
  };
  firebase.initializeApp(config);

  const preObject = document.getElementById('object');

  const dbRefObject=firebase.database().ref().child('object');

  dbRefObject.on('value', snap => console.log(snap.val()));


}());