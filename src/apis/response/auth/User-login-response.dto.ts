interface Dto {
    token: string;
    expiredTime: number;
    userAddress: string;
    userEmail: string;
    userName: string;
    userProfile: string | null;
    userTelNumber: string;
}

export default Dto;