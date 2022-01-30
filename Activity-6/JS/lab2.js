function onp()
{
    document.getElementById("aud").style.width="400px";
    document.getElementById("aud").style.background="green";

}

function onpa()
{
    document.getElementById("aud").style.background="red";
}

function ose()
{
    document.getElementById("aud").style.background="orange";
}
function one()
{
    document.getElementById("aud").style.background="black";
}

function vonp()
{

    document.getElementById("vid").style.border="4px solid green";

}

function vonpa()
{
    document.getElementById("vid").style.border="4px solid red";
}

function vose()
{
    document.getElementById("vid").style.border="4px solid orange";
}
 
function swap()
{
    var parent = document.getElementById("vp");
    var video1 = document.getElementById("vid");
    var audio1 = document.getElementById("aud");
    var parent2 = document.getElementById("ap");
    
    parent.replaceChild(audio1,video1);

    var video2 = document.createElement("video");
    video2.src="../../Resource/video/24_HOURS.mp4";
    video2.width = "600";
    video2.height = "340";
    video2.controls = "true";
    

    

    parent2.appendChild(video2);

  
    

    

}

function removeaudio()
{
    var audio2 = document.getElementById("aud");
    var parent3 = document.getElementById("ap");
    parent3.removeChild(audio2);
    
}

function add()
{
    var parent4 = document.getElementById("vp");
    var t1 = document.createElement('p');
    t1.textContent="the end of activity-6";
    parent4.appendChild(t1);

}
