interface Dto {
    userAddress: string;
    userEmail: string;
    userName: string;
    userProfile: string | null;
    userTelNumber: string;

    token: string;
    expiredTime: number;
}

export default Dto;