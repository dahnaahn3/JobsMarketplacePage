import DesktopJobPosting from "./DesktopJobPosting"
import DesktopProfile from "./DesktopProfile"
import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
import { useEffect} from "react";
import DesktopBodyHeader from "./DesktopBodyHeader";
import { MockData } from "../MockData";


function DesktopBody({searchTerm}){

    useEffect(( )=> {
        initTE({ Dropdown, Ripple });
    }, []);

  return(
<div className="bg-slate-100 pt-5 pl-10 pr-10 flex justify-between">
    <div style={{width: "70%"}}>
    <DesktopBodyHeader />
      <div>
        <div >
          <DesktopJobPosting MockData={MockData} searchTerm={searchTerm} />
        </div>
    </div>
    </div>
    <div style={{width: "25%"}} className="mt-3">
      <DesktopProfile />
    </div>

</div>

    )
}

export default DesktopBody
