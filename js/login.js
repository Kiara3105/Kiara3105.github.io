function ok(){
   Email=document.getElementById("email").value;
   Contraseña=document.getElementById("contraseña").value;
  if(Email.length >0 && Contraseña.length >0){
    alert("Usted ha ingresado correctamente")
    localStorage.setItem('userLog', Email)
    window.location="index.html"
     }else{
    alert("Error de sesión")
  }
}
 