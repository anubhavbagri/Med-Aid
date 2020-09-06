function insert() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var locality=document.getElementById("locality").value;
    var medname=document.getElementById("medname").value;
    var meddesc=document.getElementById("meddesc").value;

    firebase.database().ref('user/'+name).set({
       userName: name,
        userEmail: email,
        userPhone: phone,
        userLocality: locality,
        userMedname: medname,
        userMeddesc: meddesc
    });

    document.getElementById("donateform").reset();
}