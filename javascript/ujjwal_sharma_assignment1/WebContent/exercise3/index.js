function grade(){
    let markgrade = "A++";
    switch(markgrade){
        case "A++": 
        document.getElementById('container').innerHTML= 'Excellent';
        break;
        case "A": document.getElementById('container').innerHTML= 'very good';
        break;
        case "B": document.getElementById('container').innerHTML= 'good';
        break;

    }
}
grade();