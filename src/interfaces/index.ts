import { type } from "os";
import User from "./User.interface";
export interface IUser {
    email: string;
    password: string;
    nickname: string;
    telNumber: string;
    address: string;
    addressDetail: string;
    profile?: string;
}

export type { User}