import DesktopJobPosting from "./DesktopJobPosting"
import DesktopProfile from "./DesktopProfile"
import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
import { useEffect, useState } from "react";
import DesktopBodyHeader from "./DesktopBodyHeader";
import { JobsData } from "../JobsData";



function DesktopBody({searchTerm, onSearchTerm}){
  const [experienceLevel, setExperienceLevel] = useState([])
  const [date, setDate] = useState('')
  const [onsiteOrRemote, setOnsiteOrRemote]=useState([])

    useEffect(( )=> {
        initTE({ Dropdown, Ripple });
    }, []);

  return(
<div className="bg-slate-100 pt-5 pl-10 pr-10 flex justify-between">
    <div style={{width: "70%"}}>

    <DesktopBodyHeader
     experienceLevel={experienceLevel}
     onExperienceLevel={setExperienceLevel}
     date={date}
     onSetDate={setDate}
     onsiteOrRemote={onsiteOrRemote}
     onOnsiteOrRemote={setOnsiteOrRemote}
     />

      <div>
        <div>
          <DesktopJobPosting
          JobsData={JobsData}
          experienceLevel={experienceLevel}
          onExperienceLevel={setExperienceLevel}
          date={date}
          onsiteOrRemote={onsiteOrRemote}
          searchTerm={searchTerm}
          onSearchTerm={onSearchTerm}
          />
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
