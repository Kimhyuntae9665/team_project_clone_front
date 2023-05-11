interface Dto {
    companyAddress: string;
    companyEmail: string;
    companyName: string;
    companyProfile: string | null;
    companyTelNumber: string;
    companyCategory: string;
    token: string;
    expiredTime: number;
}

export default Dto;