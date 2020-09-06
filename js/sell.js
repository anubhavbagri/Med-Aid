var firebaseConfig = {
    apiKey: "AIzaSyD5t7BJc3TTij2Qk51iFAKRAMWk6jBWi9k",
    authDomain: "the-med-aid.firebaseapp.com",
    databaseURL: "https://the-med-aid.firebaseio.com",
    projectId: "the-med-aid",
    storageBucket: "the-med-aid.appspot.com",
    messagingSenderId: "639992295722",
    appId: "1:639992295722:web:72da0b2efa298f84eaae53"
  };

  firebase.initializeApp(firebaseConfig);

  let sellerInfo = firebase.database().ref("sellers");

// Listen for a submit
document.querySelector(".seller-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let bname = document.querySelector("#bname").value;
  let license = document.querySelector("#license").value;
  let contact = document.querySelector("#contact").value;
  let blocality = document.querySelector("#blocality").value;
  let bmedname = document.querySelector("#bmedname").value;
  let bmedprice = document.querySelector("#bmedprice").value;

  saveSellerInfo(bname, license, contact, blocality, bmedname, bmedprice);

  document.querySelector(".seller-form").reset();
}

// Save sellers to Firebase
function saveSellerInfo(bname, license, contact, blocality, bmedname, bmedprice) {
  let newSellerInfo = sellerInfo.push();

  newSellerInfo.set({
    bname: bname,
    license: license,
    contact: contact,
    blocality: blocality,
    bmedname: bmedname,
    bmedprice: bmedprice
  });
}