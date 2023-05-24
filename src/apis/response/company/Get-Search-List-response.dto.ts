interface Dto { 
    companyTelNumber: string;
    companyName:string;
    companyProfileUrl:string | null;
    companyAddress: string;
    companyCategory:string|null;
    companyPassword:string;

    applicantTotalScore:number|null;
}

export default Dto;