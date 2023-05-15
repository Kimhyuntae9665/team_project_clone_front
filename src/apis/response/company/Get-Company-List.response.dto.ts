interface Dto{
    companyTelNumber: string;
    companyName:string;
    companyProfileUrl:string | null;
    companyAddress:string;
    companyCategory:string;
    companyPassword:string;
}
// 메인 화면에서 회사 정보 보여주기 위해
export default Dto;