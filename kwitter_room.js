
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAUpH5rwC_UGhb8ZANxkYRCBwf16NSbR20",
      authDomain: "kwitter-2bb79.firebaseapp.com",
      databaseURL: "https://kwitter-2bb79-default-rtdb.firebaseio.com",
      projectId: "kwitter-2bb79",
      storageBucket: "kwitter-2bb79.appspot.com",
      messagingSenderId: "61878593282",
      appId: "1:61878593282:web:0e13c90e4070538d58841b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      console.log("room_name-"+name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
