 function calculateSalary(a,b){
    return a+b
}


// console.log(calculateSalary(10000,5000))

function displaySalary(){
    document.getElementById('container').innerHTML= calculateSalary(10000,5000);
}

document.getElementById('button').addEventListener('click', displaySalary);