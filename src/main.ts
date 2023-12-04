import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import AdvertInterface from '../interfaces/advert_interface.ts'
import {AdvertInterfaceDTO} from '../interfaces/advert_interfaceDTO.ts'

/**
 * 
 */
export class AdvertService {
    api_url = "https://retoolapi.dev/zmRnPM/advert_test_api";

    async add(advert: AdvertInterfaceDTO): Promise<AdvertInterface> {
        const response = await fetch(this.api_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(advert),
        });
        if (!response.ok) {
          throw new Error("Hiba lépett fel új hirdetés készítése során!");
        }
        return response.json();
      }
    
      async getAll(): Promise<AdvertInterface[]> {
        const response = await fetch(this.api_url, {
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error("Hiba lépett fel a hirdetések kilistázása során!");
        }
        return response.json();
      }
}

const advertService = new AdvertService();

document.addEventListener("DOMContentLoaded", () => {
  listAdverts();
  document.getElementById("formAdvertCreate")?.addEventListener("submit", (event) => {
    event.preventDefault();
    //addAdvert();
  });
});

export async function listAdverts() {
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
}

//https://retoolapi.dev/zmRnPM/advert_test_api