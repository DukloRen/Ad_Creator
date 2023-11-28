import './index.css'

var advert_create_link = document.getElementById("advert_create_link") as HTMLLinkElement;
var advert_create_button = document.getElementById("advert_create_button") as HTMLButtonElement;
var logo_button = document.getElementById("logo_button") as HTMLLinkElement;
var kezdolap_button = document.getElementById("kezdolap_button") as HTMLLinkElement;

advert_create_link.onclick = function() {
  window.location.href = "./advert.html";
}
advert_create_button.onclick = function() {
  window.location.href = "./advert.html";
}
logo_button.onclick = function() {
  window.location.href = "./index.html";
}
kezdolap_button.onclick = function() {
  window.location.href = "./index.html";
}