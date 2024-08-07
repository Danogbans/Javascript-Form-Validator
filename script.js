//Creating Validators and event listeners.
// Get html elements and save them in a const variable.

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error and success message
// Create a function called showError.
// Create a variable inside the showError function which will get the parent element of the input element. 
// Get a class name ('form-control error') of the input parent element.
// Use querySelector to get html tag element (small) from formControl.

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid with regular expression.

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}


// An advanced way of doing this would be:
// Check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length function.
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check password match.
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


// Get field name
// Making the first letter to be uppercase.

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Creating event listener for submit button
// Use username.value to catch the value of the username and other inputs.

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    // Check username, password length and match, and email.
    // The functions are called inside the event listener.
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});


// A longer way to write the same program


   /* if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Password is required');
    } else {
        showSuccess(password2);
    }*/
 
