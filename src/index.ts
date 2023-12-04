const advert_create_link = document.getElementById("advert_create_link") as HTMLLinkElement;
const advert_create_button = document.getElementById("advert_create_button") as HTMLButtonElement;
const logo_button = document.getElementById("logo_button") as HTMLLinkElement;
const kezdolap_button = document.getElementById("kezdolap_button") as HTMLLinkElement;

advert_create_link.onclick = function() {
  window.location.href = "./advert_creator.html";
}
advert_create_button.onclick = function() {
  window.location.href = "./advert_creator.html";
}
logo_button.onclick = function() {
  window.location.href = "./index.html";
}
kezdolap_button.onclick = function() {
  window.location.href = "./index.html";
}