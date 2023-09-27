firstName = document.querySelector('#first_name');
lastName = document.querySelector('#last_name');
email = document.querySelector('#mail');
phone = document.querySelector('#phone');
pwd = document.querySelector('#pwd');
cpwd = document.querySelector('#cpwd');
matchErrorText = document.querySelector('.pwd-match-error');
createAccountBtn = document.querySelector('.btn');
signUpForm = document.querySelector('#sign-up-form');

createAccountBtn.addEventListener('click', function(e){
    const emailInput = email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;

    const phoneInput = phone.value;
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}$/

    const passwordInput = pwd.value;
    const confirmPasswordInput = cpwd.value;

    if (firstName.value === '') {
        firstName.setCustomValidity('Please enter your first name.');
        firstName.reportValidity();
        return;
    }

    if (lastName.value === '') {
        lastName.setCustomValidity('Please enter your last name.');
        lastName.reportValidity();
        return;
    }

    if (!emailPattern.test(emailInput)){
        email.setCustomValidity('Enter an email in the format of youremail@yoursite.com');
        email.reportValidity();
        return;
    } 

    if (!phonePattern.test(phoneInput)){
        phone.setCustomValidity('Enter an a phone number ###-###-#### or ##########');
        phone.reportValidity();
        return;
    } 

    if (passwordInput.length === 0) {
        pwd.setCustomValidity('Please enter a password.');
        pwd.reportValidity();
        console.log("Password empty");
        return;
    }

    if (confirmPasswordInput.length === 0) {
        cpwd.setCustomValidity('Please confirm your password.');
        cpwd.reportValidity();
        return;
    }

    if (passwordInput !== confirmPasswordInput) {
        cpwd.value = '';
        cpwd.classList.add('error')
        matchErrorText.textContent = 'Password does not match!';
    } else {
        signUpForm.submit();
    }
});

cpwd.addEventListener('input', (e) => {
    if (pwd.value !== cpwd.value) {
        matchErrorText.textContent = 'Password does not match!';
    } else {
        matchErrorText.textContent = "\u00A0";
    }
});
