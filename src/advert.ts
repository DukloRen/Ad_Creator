import { AdvertInterface } from "../interfaces/advert_interface.ts";

export class Advert implements AdvertInterface {
    public id: number;
    public title: string;
    public image: string;
    public description: string;
    public category: string;
    public price: number;
    public seller: string;
    public phonenumber: string;
    public email: string;
    public terms_and_conditions: boolean;
    private regexName = /^[a-zöüóőúűéáí]+ [a-z öüóőúűéáí]+$/i;
    private regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    private regexPhonenumber = /^\+[0-9 ]{11,}$/;

    constructor(id: number, title: string, image: string, description: string, category: string,
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
        } else if (!this.regexName.test(seller)) {
            throw new Error("Érvénytelen név formátum!");
        } else if (phonenumber.trim() == "") {
            throw new Error("Adja meg telefonszámát!");
        } else if (!this.regexPhonenumber.test(phonenumber)) {
            throw new Error("Érvénytelen telefonszám formátum! (pl.: +36 30 333 3333)");
        } else if (email.trim() == "") {
            throw new Error("Adja meg e-mail címét!");
        } else if (!this.regexEmail.test(email)) {
            throw new Error("Érvénytelen e-mail cím formátum!");
        } else {
            this.id = id;
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