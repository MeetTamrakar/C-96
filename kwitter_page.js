const firebaseConfig = {
      apiKey: "AIzaSyCG_2b1HdIQHAktV_bg5DmsnJr0qD_jydo",
      authDomain: "kwitter-ec1fc.firebaseapp.com",
      databaseURL: "https://kwitter-ec1fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec1fc",
      storageBucket: "kwitter-ec1fc.appspot.com",
      messagingSenderId: "593231689615",
      appId: "1:593231689615:web:4c2768b9bdd5484d1a7dfa"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localstorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";


      

       
}
