/**
 * Az advert interfacenek a DTO (Data Transfer Object) változata ahonnan ki van hagyva az id mező. Lásd: advert_interface a mezők leírásához.
 */
export interface AdvertInterfaceDTO {
    title: string;
    image: string;
    description: string;
    category: string;
    price: number;
    seller: string;
    phonenumber: string;
    email: string;
    terms_and_conditions: boolean;
}