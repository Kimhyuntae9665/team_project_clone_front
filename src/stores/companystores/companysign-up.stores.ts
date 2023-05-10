import { create } from "zustand";

interface CompanySignUpStore {
    companyEmail: string;
    companyPassword: string;
    companyPasswordCheck: string;
    companyName: string;
    companyTelNumber: string;
    companyAddress: string;
    companyAddressDetail: string;
    companyEmailMessage: string;
    setCompanyEmail: (str: string) => void;
    setCompanyPassword: (str: string) => void;
    setCompanyPasswordCheck: (str: string) => void;
    setCompanyName: (str: string) => void;
    setCompanyTelNumber: (str: string) => void
    setCompanyAddress: (str: string) => void;
    setCompanyAddressDetail: (str: string) => void;

    signUpError: boolean;
    setSignUpError: (signUpError: boolean) => void;

    emailPatternCheck: boolean | null;
    setEmailPatternCheck: (emailPatternCheck: boolean) => void;
    emailValidate: boolean | null;
    setEmailValidate: (emailValidate: boolean) => void;

    passwordPatternCheck: boolean | null;
    setPasswordPatternCheck: (passwordPatternCheck: boolean) => void;
    passwordValidate: boolean | null;
    setPasswordValidate: (passwordValidate: boolean) => void;
    
    nameValidate: boolean | null;
    setNameValidate: (nameValidate: boolean) => void;

    telNumberPatternCheck: boolean | null;
    setTelNumberPatternCheck: (telNumberPatternCheck: boolean) => void;
    telNumberValidate: boolean | null;
    setTelNumberValidate: (telNumberValidate: boolean) => void;
}
const companyStore = create<CompanySignUpStore>((set) => ({
    companyEmail: '',
    companyPassword: '',
    companyPasswordCheck: '',
    companyName: '',
    companyTelNumber:'',
    companyAddress: '',
    companyAddressDetail:'',
    companyEmailMessage: '',
    setCompanyEmail: (companyEmail) => {
        const emailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;
        const isMatched = emailValidator.test(companyEmail);
        const emailMessage = isMatched ? '' : '이메일 주소 포맷이 맞지 않습니다.';
        set((state) => ({...state, companyEmail, emailMessage}))
    },
    setCompanyPassword: (companyPassword) => set((state) => ({...state, companyPassword})),
    setCompanyPasswordCheck: (companyPasswordCheck) => set((state) => ({...state, companyPasswordCheck})),
    setCompanyName: (companyName) => set((state) => ({...state, companyName})),
    setCompanyTelNumber: (companyTelNumber) => set((state) => ({...state, companyTelNumber})),
    setCompanyAddress: (companyAddress) => set((state) => ({...state, companyAddress})),
    setCompanyAddressDetail: (companyAddressDetail) => set((state) => ({...state, companyAddressDetail})),

    signUpError: false,
    setSignUpError: (signUpError: boolean) => set((state) => ({...state, signUpError})),

    emailPatternCheck: null,
    setEmailPatternCheck: (emailPatternCheck: boolean) => set((state) => ({...state, emailPatternCheck})),
    emailValidate: null,
    setEmailValidate: (emailValidate: boolean) => set((state) => ({...state, emailValidate})),

    passwordPatternCheck: null,
    setPasswordPatternCheck: (passwordPatternCheck: boolean) => set((state) => ({...state, passwordPatternCheck})),
    passwordValidate: null,
    setPasswordValidate: (passwordValidate: boolean) => set((state) => ({...state, passwordValidate})),

    nameValidate: null,
    setNameValidate: (nameValidate: boolean) => set((state) => ({...state, nameValidate})),

    telNumberPatternCheck: null,
    setTelNumberPatternCheck: (telNumberPatternCheck: boolean) => set((state) => ({...state, telNumberPatternCheck})),
    telNumberValidate: null,
    setTelNumberValidate: (telNumberValidate: boolean) => set((state) => ({...state, telNumberValidate})),

}))

export default companyStore;