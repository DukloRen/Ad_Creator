/**
 * Az advert interfacenek a DTO (Data Transfer Object) változata ahonnan ki van hagyva az id mező. Lásd: advert_interface a mezők leírásához.
 */
export interface AdvertInterfaceDTO {
    /**
     * Hirdetés címe
     */
    title: string;
    /**
     * Hirdetés képe
     */
    image: string;
    /**
     * Hirdetés leírása
     */
    description: string;
    /**
     * Hirdetés kategóriája
     */
    category: string;
    /**
     * Hirdetés ára
     */
    price: number;
    /**
     * Hirdető neve
     */
    seller: string;
    /**
     * Hirdető telefonszáma
     */
    phonenumber: string;
    /**
     * Hirdető email címe
     */
    email: string;
    /**
     * Felhasználói és Adatvédelmi szabályzat
     */
    terms_and_conditions: boolean;
}