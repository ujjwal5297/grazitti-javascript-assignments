function print(){
    var x=["vendorSub","productSub","vendor","maxTouchPoints","userActivation","doNotTrack","geolocation","connection","plugins","mimeTypes","webkitTemporaryStorage","webkitPeristentStorage","hardwareConcurrency","cookieEnabled","appCodeName","appName","appVersion","platform"]
        for(let i of x){
        document.getElementById('container').innerHTML += `${i}<br/>`
        console.log(i)
}
}

print()