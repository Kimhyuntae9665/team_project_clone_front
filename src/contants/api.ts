const HOST = 'http://localhost:4040/';

export const USER_SIGN_UP_URL = `${HOST}auth/signup/user`;
export const USER_SIGN_IN_URL = `${HOST}auth/login/user`;
export const COMPANY_SIGN_UP_URL = `${HOST}auth/signup/company`;
export const COMPANY_SIGN_IN_URL = `${HOST}auth/login/company`;


export const VALIDATE_USER_EMAIL_URL = `${HOST}user/validate/userEmail`;
export const VALIDATE_USER_TEL_NUMBER_URL = `${HOST}user/validate/userTelNumber`
export const VALIDATE_USER_NICKNAME_URL = `${HOST}user/validate/userNickname`;
export const GET_TOP3_COMPANY_LIST_URL = `${HOST}company/top3-company-list`;
export const VALIDATE_COMPANY_EMAIL_URL = `${HOST}company/validate/companyEmail`;
export const VALIDATE_COMPANY_TEL_NUMBER_URL = `${HOST}company/validate/companyTelNumber`;
export const GET_LIST_COMPANY = `${HOST}api/company/list`;

export const COMPANY_SELECT_UNIVERSITY = `${HOST}select/company/university`;
export const COMPANY_SELECT_CARRER = `${HOST}select/company/carrer`
export const COMPANY_SELECT_LICENSE = `${HOST}select/company/license`

export const GET_MY_COMPANY_LIST_URL =`${HOST}api/company/my-list`

export const authorizationHeader = (accessToken: string) =>{
    return {headers:{Authorization:`Bearer ${accessToken}`}}
}

