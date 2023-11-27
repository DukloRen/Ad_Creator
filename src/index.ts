import './index.css'

var advert_create = document.getElementById("advert_create") as HTMLButtonElement;
var logo_button = document.getElementById("logo_button") as HTMLLinkElement;
var kezdolap_button = document.getElementById("kezdolap_button2") as HTMLLinkElement;

advert_create.onclick = function() {
  window.location.href = "./advert.html";
}
logo_button.onclick = function() {
  window.location.href = "./index.html";
}
kezdolap_button.onclick = function() {
  window.location.href = "./index.html";
}