
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

  } else {
    // No user is signed in.
    document.getElementById()
  }
});

function login () {

	var correo = document.getElementById("correoElectronico").value;
	var contrasena = document.getElementById("contrasena").value;

	window.alert(correo + " " + contrasena);
}