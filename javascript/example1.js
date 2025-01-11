// Write a JavaScript that handles following mouse events. Add necessary elements.
// (i) If the mouse is over the heading, heading should turn yellow and if the mouse goes out of the heading it should turn black.
// (ii) If find time button is clicked show time and date information. If button named “red” is clicked, background should change to red and If button named “green” is clicked, background should change to green.



function mover(e){
    e.style.color="yellow"
}
function mout(e){
    e.style.color="black"
}
function red(){
    b=document.querySelector("body")
    b.style.backgroundColor="red"
}
function green(){
    b=document.querySelector("body")
    b.style.backgroundColor="green"
}
function findTime(){
    b=document.querySelector("h1")
    s=b.innerHTML
    var d = new Date();
    b.innerHTML=(d + " " +s)
}