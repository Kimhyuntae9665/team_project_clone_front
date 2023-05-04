import User from "./User.interface";
import Company from "./Company.interface";
export interface IUser {
    email: string;
    password: string;
    name: string;
    telNumber: string;
    address: string;
    addressDetail: string;
    profile?: string;
}
export interface ICompany{
    email: string;
    name: string;
    telNumber: string;
    address: string;
    addressDetail: string;
    profile?: string | null;

}

export type { User,Company}