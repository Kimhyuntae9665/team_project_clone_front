interface Dto {
    userEmail: string;
    userPassword:string;
    userProfileUrl: string | null;
    userTelNumber: string;
    userName: string;
    userAddress: string;
    userAge:string;
    userGender:string;
    token: string;
    expiredTime: number;
}

export default Dto;