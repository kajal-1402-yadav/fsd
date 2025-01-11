// function click1(e){
//     e.innerHTML='text'
//     e.style.color="red"
// }

// function mouseup(e){
//     e.innerHTML='text'
//     e.style.color="yellow"
// }

// function mousedown(e){
//     e.innerHTML='text'
//     e.style.color="green"
// }

// function mouseout(e){
//     e.innerHTML='text'
//     e.style.color="blue"
// }

// function mouseover(e){
//     e.innerHTML='text'
//     e.style.color="purple"
// }

function mdown(e){
    var val=e.button;
    console.log(val)
    if (val==0){
        alert('left click')
    }
    else if (val==1){
        alert('middle button click')
    }
    else{
        alert('right click')
    }
}
