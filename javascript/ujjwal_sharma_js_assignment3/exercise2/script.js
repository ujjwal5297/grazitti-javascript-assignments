function myfunction() {
    let text = document.getElementById('name').value;
    if (text == "") {
        alert('The name cannot be empty')
    }
    else if (text == "Vishal") {
        if (confirm('You have entered Vishal press OK to continue')) {
            document.getElementById('confirm').innerHTML = 'You have confirmed to continue';
            document.getElementById('cancel').innerHTML = '';
        }
        else {
            document.getElementById('cancel').innerHTML = 'Cannot proceed further you have cancelled it';
            document.getElementById('confirm').innerHTML = '';
        }
    }
    else{
        alert("Invalid name")
    }
}