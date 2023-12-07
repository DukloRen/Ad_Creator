/**
 * Ez a typescript fájl segítségével jönnek létre a "hirdetés kártyák" a kezdőlapon,
 * emellett itt van megvalósítva az index(Kezdőlap) oldalon található gombok, linkek működése.
 */
import { AdvertService } from "./main.ts";

const advert_create_link = document.getElementById("advert_create_link") as HTMLLinkElement;
const advert_create_button = document.getElementById("advert_create_button") as HTMLButtonElement;
const logo_button = document.getElementById("logo_button") as HTMLLinkElement;
const kezdolap_link = document.getElementById("kezdolap_link") as HTMLLinkElement;
const adatbazis_link = document.getElementById("adatbazis_link") as HTMLLinkElement;
const advertService = new AdvertService();

advert_create_link.onclick = function() {
  window.location.href = "./advert_creator.html";
}
advert_create_button.onclick = function() {
  window.location.href = "./advert_creator.html";
}
logo_button.onclick = function() {
  window.location.href = "./index.html";
}
kezdolap_link.onclick = function() {
  window.location.href = "./index.html";
}
adatbazis_link.onclick = function() {
  window.open("https://retoolapi.dev/zmRnPM/advert_test_api", "_blank");
}

/**
 * Ez a function tölti be a hirdetéseket a kezdőlapra és rakja őket "hirdetés kártyákba".
 * @returns A kész "hirdetés kártya" tömbjét(div-jét).
 */
document.addEventListener("DOMContentLoaded", async () => {
  const divForCards = document.getElementById("divForCards") as HTMLDivElement;
  divForCards.textContent = "";
  const adverts = await advertService.getAll();

  const cards = adverts.map((advert) => {
    const divCol = document.createElement("div");
    divCol.className = "col-xl-3 col-md-4 col-sm-6";

    const divCard = document.createElement("div");
    divCard.style.backgroundColor="rgb(32, 189, 178)";
    divCard.className = "card";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = advert.image+".png";
    img.alt = "Hirdetés képe";

    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    const h3 = document.createElement("h3");
    h3.className = "card-title";
    h3.textContent = advert.title;

    const p = document.createElement("p");
    p.className = "card-text";
    p.textContent = advert.description;

    const ul = document.createElement("ul");
    ul.className = "list-group list-group-flush";

    const liCategory = document.createElement("li");
    liCategory.className = "list-group-item";
    liCategory.textContent = advert.category.substring(0,1).toUpperCase()+advert.category.substring(1);

    const liPrice = document.createElement("li");
    liPrice.className = "list-group-item font-weight-bold";
    liPrice.textContent = advert.price.toString() + " Ft";

    ul.append(liCategory, liPrice);
    divCardBody.append(h3, p);
    divCard.append(img, divCardBody, ul);
    divCol.append(divCard);

    return divCol;
  });
  divForCards.append(...cards);
});