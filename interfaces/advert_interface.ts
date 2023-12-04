//npx typedoc --entryPointStrategy expand ./src
/**
 *  Hirdetés tulajdonságait leíró interface.
 */
export default interface AdvertInterface {
    /**
     * Hirdetés azonosítója
     */
    id: number;
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