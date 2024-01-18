const nameError = document.getElementById('Name-error');
const phoneError = document.getElementById('Phone-error');
const emailError = document.getElementById('email-error');
const massageError = document.getElementById('massage-error');
const submitError = document.getElementById('submit-error');
function validatename() {
    const name = document.getElementById('contact-name').value;

    nameError.innerHTML = '';

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }


    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatephone() {
    const phone = document.getElementById('contact-phone').value;


    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateemail() {
    const email = document.getElementById('contact-email').value;


    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {

        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatemassage() {
    const massage = document.getElementById('contact-massage').value;

    const required = 20;

    const left = required - massage.length;

    const massageError = document.getElementById('massage-error');

    if (left > 0) {
        massageError.innerHTML = left + ' more characters required';
        return false;
    }

    massageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateform() {
    if (!validateemail() || !validatename() || !validatephone() || !validateemail() || !validatemassage()) {
        submitError.style.display = 'block';

        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        submitError.innerHTML = 'fix the error'

        return false;
    }
    alert("success!");
    setTimeout(function () {
        location.reload();
    },);
    return false;

}







