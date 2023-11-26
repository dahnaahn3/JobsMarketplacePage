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
import { ProfileData } from "../ProfileData";



function DesktopBody({searchTerm, onSearchTerm}){
  const [experienceLevel, setExperienceLevel] = useState([])
  const [date, setDate] = useState('')
  const [onsiteOrRemote, setOnsiteOrRemote]=useState([])

    useEffect(( )=> {
        initTE({ Dropdown, Ripple });
    }, []);

  return(
<div className="pt-5 flex absolute"
style={{backgroundColor:"#f8f7fa"}}>
    <div style={{paddingLeft: "120px", paddingRight:"64px"}}>

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

    <div
    style={{paddingRight: "120px"}}
    className="mt-3">
      <DesktopProfile ProfileData={ProfileData}/>
    </div>

</div>

    )
}

export default DesktopBody
