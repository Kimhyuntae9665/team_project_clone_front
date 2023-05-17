import { useParams } from "react-router-dom";
import MyCompanypageHeadView from "./MyCompanypageHead";
import MyCompanypageInterfaceView from "./MyCompanypageInterface";

interface MyCompanypageViewProps {
    phoneNumber: string | undefined;
  }

export default function MyCompanypageView() {

    // const {phoneNumber} = useParams();

    return (
        <>
        <MyCompanypageHeadView />
        <MyCompanypageInterfaceView/>
        </>
    )
}