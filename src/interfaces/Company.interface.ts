interface Company{
    companyEmail: string;
    companyName: string;
    companyTelNumber: string;
    companyAddress: string;
    companyProfile?: string | null;
    companyPassword: string;
    companyCategory: string;
}
// 로그인할때 필요한 정보
export default Company;