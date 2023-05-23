
import { User } from "src/interfaces";
import { create } from "zustand";

interface ISignUpStore {
    userEmail: string;
    userPassword: string;
    userPasswordCheck: string;
    userName: string;
    userTelNumber: string;
    userAddress: string;
    userAddressDetail: string;
    userEmailMessage: string;
    userAge: string;
    userGender: string;
    applicantFinalEducation:string|null;
    applicantCarrer:string|null;
    applicantLicense:string|null;
    applicantTotalScore:string|null;
    applicantPercentile:string|null;
    setUserEmail: (str: string) => void;
    setUserPassword: (str: string) => void;
    setUserPasswordCheck: (str: string) => void;
    setUserName: (str: string) => void;
    setUserTelNumber: (str: string) => void
    setUserAddress: (str: string) => void;
    setUserAddressDetail: (str: string) => void;
    setUserAge: (str:string) => void;
    setUserGender: (str:string) => void;
    setApplicantFinalEducation:(str:string)=>void;
    setApplicantCarrer:(str:string)=>void;
    setApplicantLicense:(str:string)=>void;
    setApplicantTotalScore:(str:string)=>void;
    setApplicantPercentile:(str:string)=>void;

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
const userStore = create<ISignUpStore>((set) => ({
    userEmail: '',
    userPassword: '',
    userPasswordCheck: '',
    userName: '',
    userTelNumber:'',
    userAddress: '',
    userAddressDetail:'',
    userEmailMessage: '',
    userAge: '',
    userGender: '',
    applicantFinalEducation:'',
    applicantCarrer:'',
    applicantLicense:'',
    applicantTotalScore:'',
    applicantPercentile:'',
    setUserEmail: (userEmail) => {
        const emailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;
        const isMatched = emailValidator.test(userEmail);
        const userEmailMessage = isMatched ? '' : '이메일 주소 포맷이 맞지 않습니다.';
        set((state) => ({...state, userEmail, userEmailMessage}))
    },
    setUserPassword: (userPassword) => set((state) => ({...state, userPassword})),
    setUserPasswordCheck: (userPasswordCheck) => set((state) => ({...state, userPasswordCheck})),
    setUserName: (userName) => set((state) => ({...state, userName})),
    setUserTelNumber: (userTelNumber) => set((state) => ({...state, userTelNumber})),
    setUserAddress: (userAddress) => set((state) => ({...state, userAddress})),
    setUserAddressDetail: (userAddressDetail) => set((state) => ({...state, userAddressDetail})),
    setUserAge: (userAge) => set((state) => ({...state, userAge})),
    setUserGender: (userGender) => set((state) => ({...state, userGender})),
    setApplicantFinalEducation:(applicantFinalEducation)=>set((state)=>({...state,applicantFinalEducation})),
    setApplicantCarrer:(applicantCarrer) => set((state) => ({...state,applicantCarrer})),
    setApplicantLicense:(applicantLicense) => set((state) => ({...state,applicantLicense})),
    setApplicantTotalScore:(applicantTotalScore) => set((state) => ({...state,applicantTotalScore})),
    setApplicantPercentile:(applicantPercentile) => set((state) => ({...state,applicantPercentile})),



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