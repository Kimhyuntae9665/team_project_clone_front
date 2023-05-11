interface Dto{
    companyTelNumber: string;
    companyName:string;
    companyImgUrl:string | null;
    companyEmployeeNumber: string;
    companyAnnualIncomeAverage: number;
    companySales: number;
    companyAddress: string;
    companyHomepage: string;

}
// 메인화면에서 탑3 회사 보여주기 위해
export default Dto;

