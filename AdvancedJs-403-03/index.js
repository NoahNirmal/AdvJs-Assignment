console.log("hello")
function calculate(){
    console.log("clicked")
    var amount= +document.getElementById("inputamount").value
    console.log(amount)

    var service= document.getElementById("service").value

    console.log(service)
    var people=+document.getElementById("people").value

    var total = (amount * service) / people;
    console.log(total)
    var result= document.getElementById("resulth1")
    result.innerHTML=` <p>Tip Amount</p><h1>$${total}</h1><p>each<p>`


}