import User from "./User.interface";
import Company from "./Company.interface";

export interface IPreviewItem {
    img: string | null;
    writerProfile: string;
    writerNickname: string;
    writerDate: string;
    boardTitle: string;
    boardContent: string;
    likeCount: number;
    commentCount: number;
    viewCount: number;

    boardNumber: number;
}
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