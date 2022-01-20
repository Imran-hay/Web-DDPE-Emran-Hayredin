function sub()
{
    
    window.alert("successfully submitted");

}

function lo()
{
    document.getElementById("body").style.border= "4px solid black";

}

function refrence1focus()
{
    document.getElementById("r1f").style.background="rgb(219, 143, 105)";
    document.getElementById("r1c").style.background="rgb(219, 143, 105)";
    document.getElementById("r1r").style.background="rgb(219, 143, 105)";
    document.getElementById("r1a").style.background="rgb(219, 143, 105)";
    document.getElementById("r1t").style.background="rgb(219, 143,105)";

}

function refrence1blur()
{
    document.getElementById("r1f").style.background="rgb(255, 255, 255)";
    document.getElementById("r1c").style.background="rgb(255, 255, 255)";
    document.getElementById("r1r").style.background="rgb(255, 255, 255)";
    document.getElementById("r1a").style.background="rgb(255, 255, 255)";
    document.getElementById("r1t").style.background="rgb(255, 255, 255)";

    
}




function refrence2focus()
{
    document.getElementById("r2f").style.background="rgb(219, 143, 105)";
    document.getElementById("r2c").style.background="rgb(219, 143, 105)";
    document.getElementById("r2r").style.background="rgb(219, 143, 105)";
    document.getElementById("r2a").style.background="rgb(219, 143, 105)";
    document.getElementById("r2t").style.background="rgb(219, 143, 105)";

}

function refrence2blur()
{
    document.getElementById("r2f").style.background="rgb(255, 255, 255)";
    document.getElementById("r2c").style.background="rgb(255, 255, 255)";
    document.getElementById("r2r").style.background="rgb(255, 255, 255)";
    document.getElementById("r2a").style.background="rgb(255, 255, 255)";
    document.getElementById("r2t").style.background="rgb(255, 255, 255)";

    
}

function ekey()
{
    document.getElementById("em").style.color="rgb(112, 0, 0)";
    const pattern = /@/;
    var test1 = document.getElementById("em").value;
    if(pattern.test(test1) == true)
    {
        document.getElementById("em").style.background="rgb(77, 240, 131)";
    }

    else
    {
        document.getElementById("em").style.background="rgb(232, 46, 46)";
        
    }
}


function ikey()
{
    document.getElementById("fname").style.width="250px";
}