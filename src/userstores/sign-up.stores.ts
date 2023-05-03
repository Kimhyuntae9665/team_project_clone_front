import { create } from "zustand";

interface ISignUpStore {
    useremail: string;
    userpassword: string;
    userpasswordCheck: string;
    username: string;
    usertelNumber: string;
    useraddress: string;
    useraddressDetail: string;
    useremailMessage: string;
    setUserEmail: (str: string) => void;
    setUserPassword: (str: string) => void;
    setUserPasswordCheck: (str: string) => void;
    setUsername: (str: string) => void;
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

export default ISignUpStore;