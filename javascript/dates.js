// var d1=new Date()
// document.write(d1+'<br>')
// document.write(d1.getFullYear()+"<br>")
// document.write(d1.getMonth()+"<br>")
// document.write(d1.getDate()+"<br>")
// document.write(d1.getDay()+"<br>")
// document.write(d1.getTime()+"<br>")
// document.write(d1.getHours()+"<br>")
// document.write(d1.getMinutes()+"<br>")
// document.write(d1.getSeconds()+"<br>")
// document.write(d1.getMilliseconds())
        
var d=prompt("Enter date:")
var m=prompt("Enter month:")
var y=prompt("Enter year:")

function days(date1,date2){
    var odd=24*60*60*1000
    var d1_ms=date1.getTime()
    var d2_ms=date2.getTime()
    var diff=Math.abs(d1_ms-d2_ms)
    return (Math.round(diff/odd));
}

function display(){
    var d1=new Date()
    d1.setDate(d) 
    d1.setMonth(m)
    var d2=new Date()
    cy=d2.getFullYear()
    if (y>=cy){
        d1.setYear(y)
    }
    else{
        alert("Invalid year")
    }
    document.write(days(d1,d2))
}