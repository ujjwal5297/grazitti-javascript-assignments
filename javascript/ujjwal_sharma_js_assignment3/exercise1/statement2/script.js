function myFunction() {
    document.getElementById('welcome').innerHTML= 'Welcome Grazittians have a nice day';
}



function inputText() {
    inputRef= document.getElementById('input').value;
    document.getElementById('welcome').innerHTML= inputRef;
}

function button() {
    document.getElementById('hello').innerHTML= 'Hey..you have clicked me';
    document.getElementById('welcome').style.display= 'none';
}