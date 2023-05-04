import { create } from "zustand";

interface CompanySignUpStore {
    userEmail: string;
    userPassword: string;
    userPasswordCheck: string;
    userName: string;
    userTelNumber: string;
    userAddress: string;
    userAddressDetail: string;
    userEmailMessage: string;
    setUserEmail: (str: string) => void;
    setUserPassword: (str: string) => void;
    setUserPasswordCheck: (str: string) => void;
    setUserName: (str: string) => void;
    setUserTelNumber: (str: string) => void
    setUserAddress: (str: string) => void;
    setUserAddressDetail: (str: string) => void;

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
const userStore = create<CompanySignUpStore>((set) => ({
    userEmail: '',
    userPassword: '',
    userPasswordCheck: '',
    userName: '',
    userTelNumber:'',
    userAddress: '',
    userAddressDetail:'',
    userEmailMessage: '',
    setUserEmail: (email) => {
        const emailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;
        const isMatched = emailValidator.test(email);
        const emailMessage = isMatched ? '' : '이메일 주소 포맷이 맞지 않습니다.';
        set((state) => ({...state, email, emailMessage}))
    },
    setUserPassword: (userpassword) => set((state) => ({...state, userpassword})),
    setUserPasswordCheck: (userpasswordCheck) => set((state) => ({...state, userpasswordCheck})),
    setUserName: (userName) => set((state) => ({...state, userName})),
    setUserTelNumber: (usertelNumber) => set((state) => ({...state, usertelNumber})),
    setUserAddress: (useraddress) => set((state) => ({...state, useraddress})),
    setUserAddressDetail: (useraddressDetail) => set((state) => ({...state, useraddressDetail})),

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

export default userStore;