interface Dto {
    companyTelNumber: string;
    companyName: string;
    companyProfileUrl: string | null;
    companyAddress: string;
    companyCategory: string;
    companyEmail: string;
    companyPassword:string;
    token: string;
    expiredTime: number;
}

export default Dto;