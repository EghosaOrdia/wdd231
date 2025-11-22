const params = new URLSearchParams(window.location.search);

const fname = params.get("fname");
const lname = params.get("lname");
const email = params.get("email");
const number = params.get("number");
const businessname = params.get("businessname");
const timestamp = params.get("timestamp");

const fnameText = document.getElementById("fname");
const lnameText = document.getElementById("lname");
const emailText = document.getElementById("email");
const numberText = document.getElementById("number");
const bname = document.getElementById("bname");
const timestampText = document.getElementById("timestamp");

fnameText.textContent = fname;
lnameText.textContent = lname;
emailText.textContent = email;
numberText.textContent = number;
bname.textContent = businessname;
timestampText.textContent = timestamp;
