function addUser(){
    Name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", Name);
    window.location="kwitter_room.html";
}