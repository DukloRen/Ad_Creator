/**
 * A hirdetéseket létrehozó typescript fájl, emellett itt van megvalósítva az advert_creator(Hirdetés Készítő) oldalon található gombok, linkek működése.
 */
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

/**
 * Ez a function megállítja a felhasználót, ha esetleg véletlenül bezárná az oldalt, vagy ellépne és megkérdezi, hogy biztosan félbeszakítja-e a hirdetés feladását.
 */
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Biztosan félbeszakítja a hirdetés feladást?";
});

/**
 * Ez a function deklarálja a hirdetés feladásához szükséges változókat, és a hirdetés feladásához szükséges adatokat adja meg értékül nekik.
 */
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

    /**
     * Ez a try-catch páros megpróbálja létrehozni a hirdetést az adatbázisban az AdvertService osztály Add() function-jének segítségével, ha nem sikerül, akkor hibaüzenetet dob.
     */
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