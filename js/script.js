const targetingForm = document.querySelector("#contactForm");

if(targetingForm) {
    targetingForm.addEventListener("submit", validatingForm);
}

function validatingForm(event) {
    event.preventDefault();

    // consts for subject
    const subject = document.querySelector("#subject");
    const subjectError = document.querySelector("#subjectError");
    const subjectValue = subject.value;

    // consts for firstName
    const firstNameId = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstNameId.value;
    console.log(firstNameValue);

    // consts for lastName
    const lastNameId = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastNameId.value;
    console.log(lastNameValue);

    // consts for email
    const emailId = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const emailValue = emailId.value;
    console.log(emailValue);

    // consts for message
    const messageId = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = messageId.value;
    console.log(messageValue);

    if (validateSubject(subjectValue) === false) {
        subjectError.style.display = "block";
    } else {
        subjectError.style.display = "none";
    }
    if (checkInputLength(firstNameValue) === false) {
        firstNameError.style.display = "block";
    } else {
        firstNameError.style.display = "none";
    }
    if (checkInputLength(lastNameValue) === false) {
        lastNameError.style.display = "block";
    } else {
        lastNameError.style.display = "none";
    }
    if (validatingEmail(emailValue) === false) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
    if (validateMessageLength(messageValue) === false) {
        messageError.style.display = "block";
    } else {
        messageError.style.display = "none";
    };

};

function checkInputLength(value) {
    if (value.length > 0) {
        return true;
    } else {
        return false;
    }
};

function validateMessageLength(messageValue) {
    if (messageValue.length >= 10) {
        return true;
    } else {
        return false;
    }
};

function validatingEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

function validateSubject(subject) {
    return (subject !== "placeholder");
}