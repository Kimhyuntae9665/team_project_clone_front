interface Dto {
    userAddress: string;
    userEmail: string;
    userName: string;
    userprofile: string | null;
    userTelNumber: string;

    token: string;
    expiredTime: number;
}

export default Dto;