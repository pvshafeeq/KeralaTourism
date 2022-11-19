var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
var contactRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

function loginvalidate() {
    var txtEmail = document.getElementById('txtEmail').value.trim();
    var txtPassword = document.getElementById('txtPassword').value.trim();

    var errEmail = document.getElementById('errEmail');
    var errPwd = document.getElementById('errPwd');

    errEmail.innerHTML = '';
    errPwd.innerHTML = '';
    var isOk = false;

    if (isEmpty(txtEmail)) {
        errEmail.innerHTML = 'Email cannot be blank!';
        errEmail.style.color = "white";
        errEmail.style.backgroundColor = "red";
        isOk = false;
    }
    else if (emailRegex.test(txtEmail)) {
        isOk = true;
    }
    else {
        errEmail.innerHTML = 'Email is Invalid';
        errEmail.style.color = "white";
        errEmail.style.backgroundColor = "red";
        isOk = false;
    }

    if (isEmpty(txtPassword)) {
        errPwd.innerHTML = 'Password cannot be blank';
        errPwd.style.color = "white";
        errPwd.style.backgroundColor = "red";
        isOk = false;
    }
    else if (!pwdRegex.test(txtPassword)) {
        errPwd.innerHTML = 'Password is Invalid';
        errPwd.style.color = "white";
        errPwd.style.backgroundColor = "red";
        isOk = false;
    }

    return isOk;
}

function registervalidate() {
    var txtEmail = document.getElementById('txtEmail').value.trim();
    var txtcontact = document.getElementById('txtcontact').value.trim();
    var txtPassword = document.getElementById('txtPassword').value.trim();
    var txtRetypePassword = document.getElementById('txtRetypePassword').value.trim();

    var errEmail = document.getElementById('errEmail');
    var errContact = document.getElementById('errContact');
    var errPwd = document.getElementById('errPwd');
    var errRetypePwd = document.getElementById('errRetypePwd');

    errEmail.innerHTML = '';
    errContact.innerHTML = '';
    errPwd.innerHTML = '';
    errRetypePwd.innerHTML = '';
    var isOk = false;

    if (isEmpty(txtEmail)) {
        errEmail.innerHTML = 'Email cannot be blank';
        errEmail.style.color = "white";
        errEmail.style.backgroundColor = "red";
        isOk = false;
    }
    else if (emailRegex.test(txtEmail)) {
        isOk = true;
    }
    else {
        errEmail.innerHTML = 'Email is Invalid';
        errEmail.style.color = "white";
        errEmail.style.backgroundColor = "red";
        isOk = false;
    }

    if (isEmpty(txtcontact)) {
        errContact.innerHTML = 'Contact No. cannot be blank';
        errContact.style.color = "white";
        errContact.style.backgroundColor = "red";
        isOk = false;
    }
    else if (txtcontact.length < 10) {
        errContact.innerHTML = 'Contact No. should conatain 10 numbers only';
        errContact.style.color = "white";
        errContact.style.backgroundColor = "red";
        isOk = false;
    }
    else if (txtcontact.length > 10) {
        errContact.innerHTML = 'Contact No. should conatain 10 numbers only';
        errContact.style.color = "white";
        errContact.style.backgroundColor = "red";
        isOk = false;
    }
    else if (!contactRegex.test(txtcontact)) {
        errContact.innerHTML = 'Contact No. is Invalid';
        errContact.style.color = "white";
        errContact.style.backgroundColor = "red";
        isOk = false;
    }

    if (isEmpty(txtPassword)) {
        errPwd.innerHTML = 'Password cannot be blank';
        errPwd.style.color = "white";
        errPwd.style.backgroundColor = "red";
        isOk = false;
    }
    else if (txtPassword.length < 8) {
        errPwd.innerHTML = 'Password length must be atleast 8 characters';
        errPwd.style.color = "white";
        errPwd.style.backgroundColor = "red";
        isOk = false;
    }
    else if (!pwdRegex.test(txtPassword)) {
        errPwd.innerHTML = 'Password is Invalid';
        errPwd.style.color = "white";
        errPwd.style.backgroundColor = "red";
        isOk = false;
    }

    if (isEmpty(txtRetypePassword)) {
        errRetypePwd.innerHTML = 'Re-type Password cannot be blank';
        errRetypePwd.style.color = "white";
        errRetypePwd.style.backgroundColor = "red";
        isOk = false;
    }
    else if (txtPassword != txtRetypePassword) {
        errRetypePwd.innerHTML = 'Passwords do not match, please try again';
        errRetypePwd.style.color = "white";
        errRetypePwd.style.backgroundColor = "red";
        isOk = false;
    }

    return isOk;
}

function isEmpty(value) {
    return (value == null || value === '');
}

function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("StrengthDisp");

    //TextBox left blank.
    if (txtPassword.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (password.length > 8) {
        passed = passed + 5;
    }

    //Display status.
    var color = "";
    var strength = "";

    if (passed > 7) {
        strength = "Strong";
        color = "green";
    }
    else if (passed > 6) {
        strength = "Medium";
        color = "orange";
    }
    else {
        strength = "Weak";
        color = "red";
    }

    password_strength.innerHTML = "Password Strength : " + strength;
    password_strength.style.background = color;
    password_strength.style.color = "white";
}