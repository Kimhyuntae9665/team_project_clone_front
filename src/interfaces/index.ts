import User from "./User.interface";
import Company from "./Company.interface";
//? mock으로 결과 확인하기 위해 interface만듬
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
    userEmail: string;
    userPassword: string;
    userName: string;
    userTelNumber: string;
    userAddress: string;
    userAddressDetail: string;
    userProfile?: string;
}
export interface ICompany{
    companyTelNumber: string;
    companyName:string;
    companyImgUrl:string | null;
    companyEmployeeNumber: string;
    companyAnnualIncomeAverage: number;
    companySales: number;
    companyAddress: string;
    companyHomepage: string;

}

export type { User,Company}