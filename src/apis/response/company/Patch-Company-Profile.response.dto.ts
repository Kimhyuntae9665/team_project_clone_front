interface Dto {
     companyTelNumber : string;
     companyName: string;
     companyProfileUrl: string;
     companyAddress: string;
     companyCategory: string;
     companyPassword: string;
     companyEmail: string;
     
     companyHomePage: string | null;
     companyEmployee: string | null;
     companyAnnualSales: string | null;
     companyStartingSalary: string | null;
     companyContents: string | null;
}

export default Dto;