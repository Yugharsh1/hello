// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
 var firebaseConfig = {
    apiKey: "AIzaSyDTDpwgXcsj3owQNqHbpMztgEYuHSGp0sI",
    authDomain: "kwitterx-159d9.firebaseapp.com",
    databaseURL: "https://kwitterx-159d9-default-rtdb.firebaseio.com",
    projectId: "kwitterx-159d9",
    storageBucket: "kwitterx-159d9.appspot.com",
    messagingSenderId: "67922458426",
    appId: "1:67922458426:web:b641d4c214e3d30798c203"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



