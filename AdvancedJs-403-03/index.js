console.log("hello")
function calculate(){
    console.log("clicked")
    var amount= +document.getElementById("inputamount").value

    var service= document.getElementById("service").value

    var people=+document.getElementById("people").value
    if(amount==""|| people==""||service==0){
        alert("Please Enter Info")
    }

    var total = (amount * service) / people;
    var result= document.getElementById("resulth1")
    result.innerHTML=` <p>Tip Amount</p><h1>$${total.toFixed(2)}</h1><p>each<p>`


}