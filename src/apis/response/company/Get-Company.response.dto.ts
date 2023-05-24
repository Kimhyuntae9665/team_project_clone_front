interface Dto {
    companyAddress: string;
    companyEmail: string;
    companyName: string;
    companyProfileUrl: string | null;
    companyTelNumber: string;
    companyCategory: string|null;
    companyPassword: string;

    applicantTotalScore:number|null;
}

export default Dto;