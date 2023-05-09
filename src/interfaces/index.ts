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
    companyTelNumber: string;
    companyName:string;
    companyImgUrl:string | null;
    companyEmployeeNumber: string;
    companyAnnualIncomeAverage: number;
    companySales: number;
    companyaddress: string;
    companyHomepage: string;

}

export type { User,Company}