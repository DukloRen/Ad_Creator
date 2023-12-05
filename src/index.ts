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

document.addEventListener("DOMContentLoaded", async () => {
  const advertTable = document.getElementById("advert") as HTMLTableElement;
  advertTable.textContent = "";
  const people = await advertService.getAll();
  const tableRows = people.map((advert) => {
    const tr = document.createElement("tr");
    const titleCol = document.createElement("td");
    //const imageCol = document.createElement("td");
    const descriptionCol = document.createElement("td");
    const categoryCol = document.createElement("td");
    const priceCol = document.createElement("td");
    const sellerCol = document.createElement("td");
    const phonenumberCol = document.createElement("td");
    const emailCol = document.createElement("td");
    titleCol.textContent = advert.title;
    descriptionCol.textContent = advert.description;
    categoryCol.textContent = advert.category;
    priceCol.textContent = advert.price.toString();
    sellerCol.textContent = advert.seller;
    phonenumberCol.textContent = advert.phonenumber;
    emailCol.textContent = advert.email;
    tr.append(...[titleCol, descriptionCol, categoryCol,
         priceCol, sellerCol, phonenumberCol, emailCol]);
    return tr;
  });
  advertTable.append(...tableRows);
});