
var firebaseConfig = {
    apiKey: "AIzaSyD5t7BJc3TTij2Qk51iFAKRAMWk6jBWi9k",
    authDomain: "the-med-aid.firebaseapp.com",
    databaseURL: "https://the-med-aid.firebaseio.com",
    projectId: "the-med-aid",
    storageBucket: "the-med-aid.appspot.com",
    messagingSenderId: "639992295722",
    appId: "1:639992295722:web:8f401abf4f281bd0eaae53"
  };

  firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let fullname = document.querySelector("#fullname").value;
  let emailid = document.querySelector("#emailid").value;
  let message = document.querySelector("#message").value;

  saveContactInfo(fullname, emailid, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(fullname, emailid, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    fullname: fullname,
    emailid: emailid,
    message: message
  });
}