export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo : {
        lat: number,
        lng: number
    }
}

export default class Address implements IAddress {
    constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: string,
        public geo: { lat: number, lng: number }) {

        }
}