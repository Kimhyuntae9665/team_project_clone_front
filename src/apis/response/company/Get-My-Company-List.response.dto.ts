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
//  유저페이지에서 내가 지원한 회사 보기
export default Dto;