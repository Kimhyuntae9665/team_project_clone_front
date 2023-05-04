<<<<<<< HEAD
import GetUserResponseDto from "./Get-User.response.dto"
import PatchUserProfileResponseDto from "./Patch-User-Profile.response.dto"
import ValidateUserEmailResponseDto from "./Validate-User-Email.response.dto"
import ValidateUserTelNumberResponseDto from "./Validate-User-TelNumber.response.dto"

export type {GetUserResponseDto, PatchUserProfileResponseDto, ValidateUserEmailResponseDto, ValidateUserTelNumberResponseDto}
=======
export default interface ResponsDto<Data> {
    result: boolean;
    message: string;
    data: Data | null;
}
>>>>>>> de2144f58389c9154ba8636147e300b40994f0f1
