let myForm = document.getElementById("my-form");


// First name validation
myForm.addEventListener('submit', function(e) {
    let firstName = document.getElementById('first-name');

    if (firstName.value == '') {
        let myError = firstName.nextElementSibling;

        myError.innerHTML = 'First name cannot be empty';
        firstName.style = 'outline : 2px solid hsl(0, 100%, 74%);';
        
        e.preventDefault();
    }
});


// Last name validation
myForm.addEventListener('submit', function(e) {
    let lastName = document.getElementById('last-name');

    if (lastName.value == '') {
        let myError = lastName.nextElementSibling;

        myError.innerHTML = 'Last name cannot be empty';
        lastName.style = 'outline : 2px solid hsl(0, 100%, 74%);';
        e.preventDefault();
    }
});


// E-mail validation
myForm.addEventListener('submit', function(e) {
    let eMail = document.getElementById('email');
    let myRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (myRegex.test(eMail.value) == false) {
        let myError = eMail.nextElementSibling;

        myError.innerHTML = `Looks like it's not an e-mail`;
        eMail.value = 'mymail@exemple.com';
        eMail.style = 'color : hsl(0, 100%, 74%); outline : 2px solid hsl(0, 100%, 74%);';
        e.preventDefault;

    }


});

//Password validation

myForm.addEventListener('submit', function(e) {
    let passWord = document.getElementById('password');
    

    if (passWord.value == '') {
        let myError = passWord.nextElementSibling;
        
        myError.innerHTML = 'Password cannot be empty';
        passWord.style = 'color : hsl(0, 100%, 74%); outline : 2px solid hsl(0, 100%, 74%);';
        e.preventDefault;
    }


});
