function nextImg() {
    var image= document.getElementById('myImage');
    if(image.src.match('images/dog1.jpg')){
        image.src= 'images/dog2.jfif'
    }
    else if(image.src.match('images/dog2.jfif')){
        image.src= 'images/dog3.jpg'
    }
    else if(image.src.match('images/dog3.jpg')){
        image.src= 'images/dog4.jfif'
    }
    else if(image.src.match('images/4.jfif')){
        image.src= 'images/dog5.jfif'
    }
    else{
        image.src= 'images/dog1.jpg'
    }
}

function prevImg() {
    var image= document.getElementById('myImage');
    if(image.src.match('images/dog5.jfif')){
        image.src= 'images/dog4.jfif'
    }
    else if(image.src.match('images/dog4.jfif')){
        image.src= 'images/dog3.jpg'
    }
    else if(image.src.match('images/dog3.jpg')){
        image.src= 'images/dog2.jfif'
    }
    else if(image.src.match('images/dog2.jfif')){
        image.src= 'images/dog1.jpg'
    }
    else{
        image.src= 'images/dog5.jfif'
    }
}