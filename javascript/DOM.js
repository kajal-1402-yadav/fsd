// const e=document.getElementById('p1')
// e.innerHTML='Hello, World!';
// e.style.color='red';
// e.style.backgroundColor='yellow';
// e.title='hello';
// e.setAttribute('class','p2')
// e.style.fontSize='30px';


// p1=document.getElementsByClassName('test')
// console.log(p1)
// for (let index = 0; index < p1.length; index++) {
//     p1[index].innerHTML='class'
//     p1[index].style.color='red'
// }

// const p=document.getElementById('p')
// const h=document.getElementById('h')
// function fun(){
//     p.style.color='blue'
//     p.style.background='green'
//     p.style.fontSize='30px'
//     p.innerHTML='gm'
//     h.style.color='red'
//     h.style.background='yellow'
//     h.style.fontSize='30px'
//     p1=document.getElementsByClassName('c1')
//     for (let index = 0; index < p1.length; index++) {
//         p1[index].style.color='red'
//     }
// }

                //OR

const b=document.getElementById('b')
const p=document.getElementById('p')    
const h=document.getElementById('h')
const p1=document.getElementsByClassName('c1')
b.addEventListener('click',()=>{
    p.style.color='blue'
    p.style.background='green'
    p.style.fontSize='30px'
    p.innerHTML='gm'
    h.style.color='red'
    h.style.background='yellow'
    h.style.fontSize='30px'
    for (let index = 0; index < p1.length; index++) {
        p1[index].style.color='red'
    }
})
