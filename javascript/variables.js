// console.log("Kajal")
// document.write("External")

// variables

//var

//local scope
// function abc(){
//     var x=10;
//     document.write(x)
// }
// abc()


//global scope
// var d=200
// function a(){
//     console.log(d)
// }
// console.log(d)
// a()


//automatically
// x1=5
// x2=6
// console.log(x1+x2)


// var a1=10
// function f1(){
//     var a2=20
//     console.log(a1,a2)
// }
// f1()
// console.log(a1+a2)
// console.log(a2) //undefined because it is local variable and it is not accessible outside the function


// var a3=10
// var a3=8
// a3=18
// console.log(a3)


// console.log(a4)//undefined
// var a4=12


// var b1=10
// var b1=20
// console.log(b1)//20


//let(block level)

// let a5=10
// function f2(){
//     let a6=9
//     console.log(a5)
//     console.log(a6)
// }
// f2()
// console.log(a6)//a6 is not defined


// let b1=10
// // let b1=20//Identifier 'b1' has already been declared
// b1=30
// console.log(b1) //error because let is block level variable and it is not reassign


// let d=10
// function f3(){
//     let d=3
//     console.log(d)//3
// }
// f3()
// console.log(d)//10


// console.log(e)// Cannot access 'e' before initialization
// let e=20


// function f5(){
//     let x1=2
//     if (x1<5){
//         let x2=10
//         console.log(x2)
//     }
//     // console.log(x2)//x2 is not defined
// }
// f5()


//const

// const z=10
// function f6(){
//     // z=9//TypeError: Assignment to constant variable.
//     console.log(z)
// }
// f6()


// const z=10
// function f6(){
//     const z=12
//     console.log(z)//12
// }
// f6()
// console.log(z)//10


// const z1=12
// // const z1=12//SyntaxError: Identifier 'z1' has already been declared
// console.log(z1);



