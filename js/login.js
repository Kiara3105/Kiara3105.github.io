function ok(){
  var email=document.getElementById("email").value;
  var contraseña=document.getElementById("contraseña").value;
  if(email=="1234.hola" && contraseña=="1234"){
    alert("Usted ha ingresado correctamente")
    window.location="index.html"
    
  }else{
    alert("Datos incorrectos")
  }
}
