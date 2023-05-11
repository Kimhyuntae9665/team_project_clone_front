interface Dto {
    token: string;
    expiredTime: number;
    companyAddress: string;
    companyEmail: string;
    companyName: string;
    companyProfile: string | null;
    companyTelNumber: string;
    companyCategory: string;
}

export default Dto;