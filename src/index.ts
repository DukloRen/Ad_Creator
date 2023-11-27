import './index.css'

var advert_create = document.getElementById("advert_create") as HTMLButtonElement;

advert_create.onclick = function() {
  window.location.href = "./advert.html";
}