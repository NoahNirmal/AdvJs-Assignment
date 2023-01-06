var button = document.getElementsByClassName("drum")
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",function(event){
        var buttontext = button[i].innerHTML;
        drumsound(buttontext)
    })
    
}

function drumsound(key){
    if(key=='w'){
        var wsound= new Audio("sounds/w.mp3")
        wsound.play()
    }
    else  if(key=='a'){
        var asound= new Audio("sounds/a.mp3")
        asound.play()
    }
    else  if(key=='s'){
        var ssound= new Audio("sounds/s.mp3")
        ssound.play()
    }
    else  if(key=='d'){
        var dsound= new Audio("sounds/d.mp3")
        dsound.play()
    }
    else  if(key=='j'){
        var jsound= new Audio("sounds/j.mp3")
        jsound.play()
    }
    else  if(key=='k'){
        var ksound= new Audio("sounds/k.mp3")
        ksound.play()
    }

    else  if(key=='l'){
        var lsound= new Audio("sounds/l.mp3")
        lsound.play()
    }


}
