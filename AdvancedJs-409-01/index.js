
function  validateform(){
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var email=document.getElementById("email").value
    var pass=document.getElementById("pass").value
    var tele=document.getElementById("tele").value
    var bio=document.getElementById("bio").value


    var parafname=document.getElementById("parafname")
    var paralname=document.getElementById("paralname")
    var paraemail=document.getElementById("paraemail")
    var parapass=document.getElementById("parapass")
    var paratele=document.getElementById("paratele")
    var parabio=document.getElementById("parabio")




  if(fname.length < 3||fname.length > 16){
    parafname.innerText="First name must be alphanumeric and 3-16 Characters"
  } 
  else{
    parafname.innerText= ""
  }


  if(lname.length <3||lname.length>16){
    paralname.innerText="Last name must be alphanumeric and 3-16 Characters"

 }
 else{
    paralname.innerText= ""
  }
 if(email =="" ||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    paraemail.innerText=" Email must be  a valid address.e.g. example@example.com"

 }
 else{
    paraemail.innerText= ""
  }
 if(pass =="" || !/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass)){
    parapass.innerText= "Password should contain atleast one number and one special character"

 }
 else{
    parapass.innerText= ""
  }
 if(tele =="" ||!/^\d{10}$/.test(tele)){
    paratele.innerText=" Please Enter  Valid Telephone Number"
 }
 else{
    paratele.innerText= ""
  }
 if(bio =="" || !/^[a-z0-9._-\s]{8,50}$/.test(bio)){
    parabio.innerText="Bio must container only lowercase letters, underscores,hyphens and be 8-50 characters"
 }
 else{
    parabio.innerText= ""
 }

  
}