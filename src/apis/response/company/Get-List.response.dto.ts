interface Dto{
    companyTelNumber: string;
    companyName:string;
    companyImgUrl:string | null;
    companyEmployeeNumber: string;
    companyAnnualIncomeAverage: number;
    companySales: number;
    address: string;
    companyHomepage: string;

}
// company my 페이지 화면에서 회사 정보 보여주기 위해
export default Dto;