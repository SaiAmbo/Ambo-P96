//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAkabXjaOaseh_xuHMXr5LnnSN8T1Uf2bo",
      authDomain: "amartya-kwitter.firebaseapp.com",
      databaseURL: "https://amartya-kwitter-default-rtdb.firebaseio.com",
      projectId: "amartya-kwitter",
      storageBucket: "amartya-kwitter.appspot.com",
      messagingSenderId: "519426241081",
      appId: "1:519426241081:web:45b33434c2b5e4747b93e8"
    };
    

    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
roomname = localStorage.getItem("room_name");
function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}