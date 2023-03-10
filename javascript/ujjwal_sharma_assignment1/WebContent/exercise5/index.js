function myFunction(){
    for(var i=1;i<=10;i++){
        document.getElementById('container').innerHTML+= `Current number: ${i}<br>`;
    }
}

myFunction();