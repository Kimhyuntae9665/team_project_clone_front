interface Company{
    
    companyTelNumber: string;
    companyName: string;
    companyProfileUrl: string | null;
    companyAddress: string;
    companyCategory: string|null;
    companyEmail: string;
    companyPassword : string;

    companyHomePage:string|null;
    companyEmployee:string|null;
    companyAnnualSales:string|null;
    companyStartingSalary:string|null;
    companyContents:string|null;
    


}
// 로그인할때 필요한 정보
export default Company;