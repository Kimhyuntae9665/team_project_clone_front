import { useEffect,useState } from "react"
import { GetCompanyListResponseDto, GetCompanyResponseDto } from "src/apis/response/company"
//? Hook을 함수를 쓸때는 무조건 앞에 use를 붙여야 된다.
const useCompanyPagingHook = (COUNT:number) => {
    const [companyList, setCompanyList] = useState<(GetCompanyResponseDto | GetCompanyListResponseDto)[]>([]);
    const [viewList, setViewList] = useState< (GetCompanyResponseDto | GetCompanyListResponseDto)[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onPageHandler = (page:number) => {
        setPageNumber(page);

        const tmpList:(GetCompanyResponseDto | GetCompanyListResponseDto) [] =[];

        const startIndex = COUNT * (page -1);
        const endIndex = COUNT * page -1;

        for (let index = startIndex; index <= endIndex; index++) {
            if (companyList.length < index + 1) break;
            tmpList.push(companyList[index])
          }
      
          setViewList(tmpList);
    }

    useEffect (() => {
        onPageHandler(pageNumber);
    },[companyList])

    return {companyList,viewList,pageNumber,setCompanyList,onPageHandler,COUNT};
}

export default useCompanyPagingHook;