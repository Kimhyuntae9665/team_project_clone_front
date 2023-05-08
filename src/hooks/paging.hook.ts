import { useState } from "react"
import { GetCompanyListResponseDto, GetCompanyResponseDto } from "src/apis/response/company"

const companyPagingHook = (COUNT:number) => {
    const [companyList, setCompanyList] = useState<(GetCompanyResponseDto | GetCompanyListResponseDto)[]>([]);
    const [viewList, setViewList] = useState< (GetCompanyResponseDto | GetCompanyListResponseDto)[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onPageHandler = (page:number) => {
        setPageNumber(page);

        const tmpList:(GetCompanyResponseDto | GetCompanyListResponseDto) [] =[];

        const startIndex = COUNT * (page -1);
        const endIndex = COUNT * page -1;
    }
}
