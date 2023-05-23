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

    companyHomePage: string | null;
     companyEmployee: string | null;
     companyAnnualSales: string | null;
     companyStartingSalary: string | null;
     companyContents: string | null;
}

export default Dto;