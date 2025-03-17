function play()
{
    mySound = new sound("sounds for class/wind.mp3");
    mySound.play();
    document.getElementById("startButton").disabled = true; // turns off the start button

    document.getElementById("stopButton").disabled = false;  // turns on the stop button
}
function stop()
{
    window.location.reload();
   

}

function sound(src)
{// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}
