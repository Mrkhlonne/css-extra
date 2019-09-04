function bold()
{

var getText=document.getElementById("text");
if(getText.style.fontWeight!="bold")
{

    getText.style.fontWeight="bold";

   
}else{
    getText.style.fontWeight="normal";
};

}


function italic()
{

var getText=document.getElementById("text");
if(getText.style.fontStyle!="italic")
{

    getText.style.fontStyle="italic";

   
}else{
    getText.style.fontStyle="normal";
};

}


function underline()
{

var getText=document.getElementById("text");
if(getText.style.textDecoration!="underline")
{

    getText.style.textDecoration="underline";

   
}else{
    getText.style.textDecoration="none";
};

}


function changesize(){

    document.getElementById("text").style.fontSize = document.getElementById("size").value+'px';
}



function chsize(){

    document.getElementById("text").style.fontSize = document.getElementById("size").value+'px';
}

 
$(document).ready(function(){
$(".col-md-3 button").css("opacity",0);

    $(".col-md-3").hover(function(){
        $(this).fadeTo("opacity",0.5);
        $(this).find("button").fadeTo("opacity","100");
    },
    function(){
        $(this).fadeTo("opacity",1);
        $(this).find("button").fadeTo("opacity","0");
    } 
    )
});

var firebaseConfig = {
    apiKey: "AIzaSyD2JG2bPp7Q9Tiy9x0D0JhpstXhYF-kAwY",
    authDomain: "checkpointfirebase-4d260.firebaseapp.com",
    databaseURL: "https://checkpointfirebase-4d260.firebaseio.com",
    projectId: "checkpointfirebase-4d260",
    storageBucket: "",
    messagingSenderId: "803639917171",
    appId: "1:803639917171:web:795da6d37c74cc1efbc806"
  };
  
  firebase.initializeApp(firebaseConfig);

  
  var messagesRef = firebase.database().ref('checkpointfirebase');

function submitForm(){
event.preventDefault();
// Get values
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var track = document.getElementById('track').value;
var number = document.getElementById('number').value;
saveMessage(name,email,track,number);
}

document.getElementById('contactForm').addEventListener('submit', submitForm);

function saveMessage(name,email,track,number){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,
email: email,
track: track,
number: number,
});
}