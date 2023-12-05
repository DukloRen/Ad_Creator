import './advert_creator.css'
import { Advert } from "./advert.ts";
import { AdvertService } from "./main.ts";

const advert_create_link = document.getElementById("advert_create_link") as HTMLLinkElement;
const logo_button = document.getElementById("logo_button") as HTMLLinkElement;
const kezdolap_link = document.getElementById("kezdolap_link") as HTMLLinkElement;
const back_button = document.getElementById("back_button") as HTMLButtonElement;
const adatbazis_link = document.getElementById("adatbazis_link") as HTMLLinkElement;


advert_create_link.onclick = () => {
  window.location.href = "./advert_creator.html";
}
logo_button.onclick = () => {
  window.location.href = "./index.html";
}
kezdolap_link.onclick = () => {
  window.location.href = "./index.html";
}
back_button.onclick = () => {
  window.location.href = "./index.html";
}
adatbazis_link.onclick = () => {
  window.open("https://retoolapi.dev/zmRnPM/advert_test_api", "_blank");
}

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Biztosan félbeszakítja a hirdetés feladást?";
});

document.addEventListener("DOMContentLoaded", () => {
  const formAdvertCreate = document.getElementById("formAdvertCreate") as HTMLFormElement;
  const errorMessage = document.getElementById("errorMessage");
  formAdvertCreate!.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputTitle: string = (document.getElementById("inputTitle") as HTMLInputElement).value;
    const inputImage: string = (document.getElementById("inputImage") as HTMLInputElement).value;
    const inputDescription: string = (document.getElementById("inputDescription") as HTMLInputElement).value;
    const inputCategory: string = (document.getElementById("inputCategory") as HTMLInputElement).value;
    const inputPrice: number = parseInt((document.getElementById("inputPrice") as HTMLInputElement).value);
    const inputSeller: string = (document.getElementById("inputSeller") as HTMLInputElement).value;
    const inputPhoneNumber: string = (document.getElementById("inputPhoneNumber") as HTMLInputElement).value;
    const inputEmail: string = (document.getElementById("inputEmail") as HTMLInputElement).value;
    const inputTAC: boolean = (document.getElementById("inputTAC") as HTMLInputElement).checked;

    try {
      const newAdvert: Advert = new Advert(inputTitle, inputImage, inputDescription, inputCategory, inputPrice, inputSeller, inputPhoneNumber, inputEmail, inputTAC);
      const advertService = new AdvertService();
      advertService.add(newAdvert);

      window.alert("Hirdetését sikeresen feladta!");
      window.location.href = "./index.html";
    } catch(e) {
      if (e instanceof Error) {
        errorMessage!.textContent = e.message;
      }
    }
  });
});