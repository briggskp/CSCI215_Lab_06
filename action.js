function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function checkAge() {
    var regEx = new RegExp('\w');
    var age = document.getElementById("age").value;

    if(regEx.test(age)) {
        console.log("Illegal character: " + document.getElementById('age').value);
       // Set background to red
        document.getElementById('age').style.backgroundColor='red';


    } else {
       document.getElementById('age').style.backgroundColor='';
    }
}

function validate() {

}