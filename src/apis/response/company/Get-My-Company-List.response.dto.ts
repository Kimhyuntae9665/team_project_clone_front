interface Dto{
    companyTelNumber: string;
    companyName:string;
    companyProfileUrl:string | null;
    companyAddress: string;
    companyCategory:string|null;
    companyPassword:string;

    applicantTotalScore :number|null;
    

}
//  유저페이지에서 내가 지원한 회사 보기
export default Dto;