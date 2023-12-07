/**
 * Ez a typescript fájl generálja az Advert class-t és annak a konstruktorát,
 * ezen felül itt vannak a hirdetés készítő form kitöltésénél szükséges regexek és ellenőrzések,
 * amik ellenőrzik, hogy a megadott adatok(input value-k) helyes formátumúak-e.
 */
import  { AdvertInterfaceDTO }  from "../interfaces/advert_interfaceDTO.ts";

const regexName = /^[a-zöüóőúűéáí]+ [a-z öüóőúűéáí]+$/i;
const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const regexPhonenumber = /^\+[0-9 ]{11,}$/;

/**
 * Az Advert class a hirdetés létrehozásához szükséges adatokat tartalmazza, a konstruktorban pedig ellenőrzi őket.
 * @implements AdvertInterfaceDTO
 */
export class Advert implements AdvertInterfaceDTO {
    public title: string;
    public image: string;
    public description: string;
    public category: string;
    public price: number;
    public seller: string;
    public phonenumber: string;
    public email: string;
    public terms_and_conditions: boolean;

    constructor(title: string, image: string, description: string, category: string,
        price: number, seller: string, phonenumber: string, email: string, terms_and_conditions: boolean) {
        
        if (title.trim() == "") {
            throw new Error("Adjon címet a hirdetésnek!");
        } else if (image.trim() == "") {
            throw new Error("Adjon képet a hirdetéshez!");
        } else if (description.trim() == "") {
            throw new Error("Adjon leírást a hirdetéshez!");
        } else if (price < 1 || isNaN(price)) {
            throw new Error("Adjon árat a hirdetéshez!");
        } else if (seller.trim() == "") {
            throw new Error("Adja meg a nevét!");
        } else if (!regexName.test(seller)) {
            throw new Error("Érvénytelen név formátum!");
        } else if (phonenumber.trim() == "") {
            throw new Error("Adja meg telefonszámát!");
        } else if (!regexPhonenumber.test(phonenumber)) {
            throw new Error("Érvénytelen telefonszám formátum! (pl.: +36 30 333 3333)");
        } else if (email.trim() == "") {
            throw new Error("Adja meg e-mail címét! (pl.: example@gmail.com)");
        } else if (!regexEmail.test(email)) {
            throw new Error("Érvénytelen e-mail cím formátum!");
        } else if (terms_and_conditions == false) {
            throw new Error("A hirdetés feladásához fogadja el a Felhasználói- és az Adatvédelmi szabályzatot!");
        } else {
            this.title = title;
            this.image = image;
            this.description = description;
            this.category = category;
            this.price = price;
            this.seller = seller;
            this.phonenumber = phonenumber;
            this.email = email;
            this.terms_and_conditions = terms_and_conditions;
        }
    }
}