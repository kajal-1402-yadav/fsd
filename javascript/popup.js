//alert
function warn(){
    alert("This is a warning msg")
        document.write('Warning!')
}

//confirm
function conf(){
    var res=confirm("Do u want to continue?")
    if (res==true){
        document.write('Yes')
        return true
    }
    else{
        document.write('No')
        return false
    }
}

//prompt

function pro(){
    a=prompt("Enter Your Name:")
    alert("Welcome "+a)
    
}