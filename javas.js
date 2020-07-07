function enterSite(){
    console.log("A gaye");
    $('#top').css("visibility","visible");
    $('#top').css("opacity","1");
    $('#click').css("transform","translate(0,-200vh)");
    $('#content').css("transform","translate(0)");
    $('#content').css("visibility","visible");
    $('#content').css("overflow","auto")
    $('#content').css("transform","translate(0)")
    $('#transparent').css("transform","translate(0)")
    $('#content').css("opacity","1");
    $('#vid').css("filter","blur(10px)");
}

function audio(){

    let audio =new Audio("original/media/Kasoor.mp3");

    audio.play();
    audio.volume=0.1;
    
}

function pausevid(){

    let myvideo =document.getElementById("vid");
    myvideo.pause();
}

