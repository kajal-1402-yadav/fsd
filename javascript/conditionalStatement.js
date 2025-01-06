function f(n){
    if (n>=85){
        return 'A';
    }
    else if (60<=n && n<=85){
        return 'B';
    }
    else if (35<=n && n<=85){
        return 'C';
    }
    else{
        return 'D';
    }
}


//entry control loop
//var i=5
// for(var i=0;i<10;i++){
//     document.write(i)//0123456789
// }
// document.write(i)//10

// let i=5
// for(let i=0;i<10;i++){
//     document.write(i)//0123456789
// }
// document.write(i)//5


//while
// var i=6
// while(i<11){
//     document.write(i)
//     i++
// }


//do-while
// var j=0
// do{
//     j++
//     document.write(j)
// }while(j<10)


for(var i=0 ;i<=10;i++){
    if(i%2==0){
        continue
    }
    else{
        document.write(i)
    }  
}
