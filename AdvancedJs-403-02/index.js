var button = document.querySelectorAll(".drum")
 var nobtn=button.length
console.log(nobtn)

for(let i=0;i<nobtn;i++){
    button[i].addEventListener("click",function(event){
        console.log("clicked")
        var buttontext = button[i].innerHTML;
        console.log(buttontext)
        drumsound(buttontext)

    })
    
}

function drumsound(key){
    if(key=='w'){
        console.log("hello")
        var wsound= new Audio("sounds/w.mp3")
        wsound.play()
    }
    else  if(key=='a'){
        console.log("hello")
        var asound= new Audio("sounds/a.mp3")
        asound.play()
    }
    else  if(key=='s'){
        console.log("hello")
        var ssound= new Audio("sounds/s.mp3")
        ssound.play()
    }
    else  if(key=='d'){
        console.log("hello")
        var dsound= new Audio("sounds/d.mp3")
        dsound.play()
    }
    else  if(key=='j'){
        console.log("hello")
        var jsound= new Audio("sounds/j.mp3")
        jsound.play()
    }
    else  if(key=='k'){
        console.log("hello")
        var ksound= new Audio("sounds/k.mp3")
        ksound.play()
    }

    else  if(key=='l'){
        console.log("hello")
        var lsound= new Audio("sounds/l.mp3")
        lsound.play()
    }


}
