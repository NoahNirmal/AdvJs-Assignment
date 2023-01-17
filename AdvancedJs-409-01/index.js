const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const email=document.getElementById("email")
const pass=document.getElementById("pass")
const tele=document.getElementById("tele")
const bio=document.getElementById("bio")

function  validateform(){
   var name =fname.value
    var surname=lname.value
   var mail=email.value
   var password= pass.value
   var mob =tele.value
   var text =bio.value

    var parafname=document.getElementById("parafname")
    var paralname=document.getElementById("paralname")
    var paraemail=document.getElementById("paraemail")
    var parapass=document.getElementById("parapass")
    var paratele=document.getElementById("paratele")
    var parabio=document.getElementById("parabio")




  if(name.length < 3||name.length > 16){
    parafname.innerText="First name must be alphanumeric and 3-16 Characters"
  } 
  else{
    parafname.innerText= ""
  }


  if(surname.length <3||surname.length>16){
    paralname.innerText="Last name must be alphanumeric and 3-16 Characters"

 }
 else{
    paralname.innerText= ""
  }
 if(mail =="" ||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    paraemail.innerText=" Email must be  a valid address.e.g. example@example.com"

 }
 else{
    paraemail.innerText= ""
  }
 if(password =="" || !/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
    parapass.innerText= "Password should contain atleast one number and one special character"

 }
 else{
    parapass.innerText= ""
  }
 if(mob =="" ||!/^\d{10}$/.test(mob)){
    paratele.innerText=" Please Enter  Valid Telephone Number"
 }
 else{
    paratele.innerText= ""
  }
 if(text =="" || !/^[a-z0-9._-\s]{8,50}$/.test(text)){
    parabio.innerText="Bio must container only lowercase letters, underscores,hyphens and be 8-50 characters"
 }
 else{
    parabio.innerText= ""
 }

  
}

// function submitform(){
//    var name =fname.value
//    var surname=lname.value
//   var mail=email.value
//   var password= pass.value
//   var mob =tele.value
//   var text =bio.value
//   console.log(name)
// }