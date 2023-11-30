import { AdvertInterface } from "../interfaces/advert_interface.ts";

export class Advert implements AdvertInterface {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    price: number;
    seller: string;
    phonenumber: string;
    email: string;
    terms_and_conditions: boolean;

    constructor(id: number, title: string, image: string, description: string, category: string, price: number, seller: string, phonenumber: string, email: string, terms_and_conditions: boolean) {
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