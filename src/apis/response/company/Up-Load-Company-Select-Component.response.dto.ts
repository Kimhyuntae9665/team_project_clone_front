export interface SelectUniversityResponseDto {
    companyTelNumber: string;
    first_grade_university: string[];
    first_grade_score: number;
    second_grade_university: string[];
    second_grade_score: number;
    third_grade_university: string[];
    third_grade_score: number;
    etc_grade_university: string[];
    etc_grade_score: number;

    "university_data":[{
      companyTelNumber: string;
      first_grade_university: string[];
      first_grade_score: number;
      second_grade_university: string[];
      second_grade_score: number;
      third_grade_university: string[];
      third_grade_score: number;
      etc_grade_university: string[];
      etc_grade_score: number;
    }]
  }
  export interface SelectCarrerResponseDto{
    companyTelNumber: string;
    carrer:string[];
    carrer_score:number;
  }
  export interface SelectLicenseResponseDto{
    companyTelNumber: string;
    license:string[];
    license_score:number;
  }
  
