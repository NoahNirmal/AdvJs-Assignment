console.log("hello")
 const word= document.getElementById("inputsearch")
 console.log(word.value)
 const shortdef = document.getElementById("shortdef")
 
 async function searchword(){

    console.log()
    var value=word.value
    

    const res= await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${value}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    console.log(res)
     const data = await res.json()
     console.log(data)
     
            // console.log(ele)
            console.log(data[0].shortdef)
            shortdef.innerHTML=`${data[0].shortdef[0]}
            `
       
}