interface Dto {
    userEmail: string;
    userPassword:string;
    userProfileUrl: string | null;
    userTelNumber: string;
    userName: string;
    userAddress: string;
    userAge:string;
    userGender:string;


    applicantFinalEducation:string|null;
    applicantCarrer:string|null;
    applicantLicense:string|null;
    applicantTotalScore:string|null;
    applicantPercentile:string|null;
}

export default Dto;