import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import AdvertInterface from '../interfaces/advert_interface.ts'
import {AdvertInterfaceDTO} from '../interfaces/advert_interfaceDTO.ts'

//RetoolApi link: https://retoolapi.dev/zmRnPM/advert_test_api

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