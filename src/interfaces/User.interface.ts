interface User{
    userEmail: string;
    userPassword:string;
    userProfileUrl?: string | null;
    userTelNumber: string;
    userName: string;
    userAddress: string;
    userAge?:string;
    userGender?:string;
    

    // ! 변수앞에 ? 함으로써 받아도 되고 안 받아도 되고  없으면 null, ? 안치면 필수로 string || null을 받아야 한다 
    applicantFinalEducation?:string|null;
    applicantCarrer?:string|null;
    applicantLicense?:string|null;
    applicantTotalScore?:string|null;
    applicantPercentile?:string|null;


    

}

export default User;
