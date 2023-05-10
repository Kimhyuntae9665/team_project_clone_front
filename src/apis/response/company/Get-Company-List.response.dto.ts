interface Dto{
    companyTelNumber: string;
    companyName:string;
    companyImgUrl:string | null;
    companyEmployeeNumber: string;
    companyAnnualIncomeAverage: number;
    companySales: number;
    companyaddress: string;
    companyHomepage: string;
    
    

}
// 메인 화면에서 회사 정보 보여주기 위해
export default Dto;