
//global variables
var change = 100;
var intervalidID = 0;

function intervalStart()
{
// local variable
var image = document.getElementById("imgMeme");

document.getElementById("startButton").disabled =true;
document.getElementById("stopButton").disabled = false;

intervalidID = setInterval(function()
{
    image.style.top = change+ "px";
    image.style.left = change + "px";
  
    document.getElementById("XandY").innerHTML = " x = " + image.style.left + " y = " + image.style.top;

    change += 2;// this is the same as change = change + 5;

}, 200);// 500 = # of ms before repeating

}

function intervalStop()
{
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(intervalidID);
}