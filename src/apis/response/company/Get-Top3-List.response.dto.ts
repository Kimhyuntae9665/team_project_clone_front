interface Dto{
    companyTelNumber: string;
    companyName:string;
    companyProfileUrl:string | null;
    companyAddress:string;
    companyCategory:string|null;
    companyPassword:string;
    companyHomePage:string;
    companySales:string;
    companyAnnualIncomeAverage:string;
    companyEmployeeNumber:string;

}
// 메인화면에서 탑3 회사 보여주기 위해
export default Dto;

