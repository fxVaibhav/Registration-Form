let username = document.getElementById("username");
let password = document.getElementById("password");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("userEmail");
let cPassword = document.getElementById("cPassword");
let cont = document.getElementById("cont");
let flag = 1;

let arr = [];
function fun() {
  let num = Math.trunc(Math.random() * 100 + 1);
  for (let i = 0; i < 200; i++) {
    if (arr.length !== 6) {
      num = Math.trunc(Math.random() * 100 + 1);
      if (num > 64 && num < 91) {
        let str = String.fromCharCode(num);
        arr.push(str);
      }
    }
  }
  console.log(...arr);
  document.getElementById("cont").innerHTML = arr.join("");
  arr = [];
}

function validateForm() {
  if (capcha.value == "") {
    document.getElementById("capchaError").innerHTML = "Please Enter Capcha";
    flag = 0;
  } else if (capcha.value != cont.textContent) {
    document.getElementById("capchaError").innerHTML = "Capcha Not Matched";
    flag = 0;
  } else {
    document.getElementById("capchaError").innerHTML = "";
    flag = 1;
  }

  if (username.value == "") {
    document.getElementById("userError").innerHTML = "Enter User Name";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("userError").innerHTML = "Required min 3 char";
    flag = 0;
  } else {
    document.getElementById("userError").innerHTML = "";
    flag = 1;
  }

  if (email.value == "") {
    document.getElementById("mailError").innerHTML = "Enter Mail";
    flag = 0;
  } else if (!email.value.endsWith("@gmail.com")) {
    document.getElementById("mailError").innerHTML = "Invalid Mail";
    flag = 0;
  } else {
    document.getElementById("mailError").innerHTML = "";
    flag = 1;
  }

  if (phoneNumber.value == "") {
    document.getElementById("phoneNoError").innerHTML = "Phone Number Empty";
    flag = 0;
  } else if (phoneNumber.value.length != 10) {
    document.getElementById("phoneNoError").innerHTML = "Invalid Number";
    flag = 0;
  } else {
    document.getElementById("phoneNoError").innerHTML = "";
    flag = 1;
  }

  if (password.value == "") {
    document.getElementById("passError").innerHTML = "Password Empty";
    flag = 0;
  } else {
    document.getElementById("passError").innerHTML = "";
    flag = 1;
  }

  if (cPassword.value == "") {
    document.getElementById("confPassError").innerHTML =
      "Enter Confirm Password";
    flag = 0;
  } else if (password.value !== cPassword.value) {
    document.getElementById("confPassError").innerHTML = "Not Matched";
    flag = 0;
  } else {
    document.getElementById("confPassError").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
