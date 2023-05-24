const HOST = 'http://localhost:4040/';

export const USER_SIGN_UP_URL = `${HOST}auth/signup/user`;
export const USER_SIGN_IN_URL = `${HOST}auth/login/user`;
export const COMPANY_SIGN_UP_URL = `${HOST}auth/signup/company`;
export const COMPANY_SIGN_IN_URL = `${HOST}auth/login/company`;


export const VALIDATE_USER_EMAIL_URL = `${HOST}user/validate/userEmail`;
export const VALIDATE_USER_TEL_NUMBER_URL = `${HOST}user/validate/userTelNumber`;
export const VALIDATE_USER_NICKNAME_URL = `${HOST}user/validate/userNickname`;
export const GET_TOP3_COMPANY_LIST_URL = `${HOST}company/top3-company-list`;
export const VALIDATE_COMPANY_EMAIL_URL = `${HOST}company/validate/companyEmail`;
export const VALIDATE_COMPANY_TEL_NUMBER_URL = `${HOST}company/validate/companyTelNumber`;
export const GET_LIST_COMPANY = `${HOST}company/list`;

export const COMPANY_SELECT_UNIVERSITY = `${HOST}select/company/university`;
export const COMPANY_SELECT_CARRER = `${HOST}select/company/carrer`;
export const COMPANY_SELECT_LICENSE = `${HOST}select/company/license`;


export const USER_SELECT_COMPONENT = `${HOST}user/select-component`;

export const GET_MY_COMPANY_LIST_URL =`${HOST}applicant/my-list`;
export const INSERT_COMPANY_INFO = `${HOST}company/insertCompanyInfo`;
export const GET_MY_SCORE = `${HOST}user/score`;

export const FILE_USER_UPLOAD_URL =`${HOST}user-file/userUpload`;
export const PATCH_USER_PROFILE_URL =`${HOST}user/profile`;

export const FILE_COMPANY_UPLOAD_URL= `${HOST}company-file/companyUpload`;
export const PATCH_COMPANY_PROFILE = `${HOST}company/companyProfile`;

export const APPLICANT_SCORE_PER_COMPANY =(company_Tel_Number:string) =>`${HOST}applicant/score/${company_Tel_Number}`;

export const GET_APPLICANT_DATA = `${HOST}applicant/get-data`;

export const authorizationHeader = (accessToken: string) =>{
    return {headers:{Authorization:`Bearer ${accessToken}`}}
}

export const mutipartHeadler = () => {
    return { headers: {'Content-Type': 'multipart/form-data' } };
}

export const GET_SEARCH_LIST_URL = (content: string, previous: string) => previous ? `${HOST}search/search-list/${content}/${previous}` : `${HOST}search/search-list/${content}`

export const GET_COMPANY_URL = (companyTelNumber: string) => `${HOST}company/${companyTelNumber}`