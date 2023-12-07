/**
 * Ez a typescript fájl generálja az AdvertService class-t és annak a két function-jét.
 */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import AdvertInterface from '../interfaces/advert_interface.ts'
import {AdvertInterfaceDTO} from '../interfaces/advert_interfaceDTO.ts'

/**
 * Az AdvertService osztály a két fontos function-ön kívül tartalmazza az API url-jét is ami a használt adatbázishoz vezet.
 * @link https://retoolapi.dev/zmRnPM/advert_test_api
 */
export class AdvertService {
    api_url = "https://retoolapi.dev/zmRnPM/advert_test_api";

    /**
     * Ez a function létrehozza az új hirdetést az adatbázisban.
     * @returns Ha hiba lépett fel a hirdetés létrehozása során, akkor hibaüzenetet dob, ha nem, akkor visszatér a hirdetés adataival.
     */
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
    
    /**
     * Ez a function kilistázza az összes hirdetést az adatbázisból.
     * @returns Ha hiba lépett fel a hirdetések kilistázása során, akkor hibaüzenetet dob, ha nem, akkor visszatér az összes hirdetés adataival.
     */
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