const dateText = document.getElementById("timestamp");

const timestamp = new Date();
dateText.value = timestamp.toLocaleDateString();
