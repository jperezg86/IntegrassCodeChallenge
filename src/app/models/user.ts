import Address from './address'
import Company from './company';

export interface IUser {
    id: number
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export default class User implements IUser {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public address: Address,
        public phone: string,
        public website: string,
        public company: Company) {}

}