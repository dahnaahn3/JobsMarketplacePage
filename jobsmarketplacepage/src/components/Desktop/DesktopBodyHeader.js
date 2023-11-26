import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
import { useEffect } from "react";
import DesktopDropdownMenus from "./DesktopDropdownMenus";

function DesktopBodyHeader({experienceLevel, onExperienceLevel, onSetDate, date, onsiteOrRemote, onOnsiteOrRemote}){

    useEffect(( )=> {
        initTE({ Dropdown, Ripple });
    }, []);

    return(
      <>
      <div>
      <ul className="bg-white border-solid flex justify-right space-x-10 pt-10"
      style={{height:"100px",paddingLeft: "20px"}}>

          <li className="hover:text-purple-600 hover:underline" style={{height:"22px"}}>Latest Posts</li>
          <li className="hover:text-purple-600 hover:underline ">Recent Activities</li>

      </ul>

      <div className=" flex justify-center ">
      <DesktopDropdownMenus
          experienceLevel={experienceLevel}
          onExperienceLevel={onExperienceLevel}
          date={date}
          onSetDate={onSetDate}
          onOnsiteOrRemote={onOnsiteOrRemote}
          onsiteOrRemote={onsiteOrRemote}
          />
    </div>
    </div>

      </>
    )
}
export default DesktopBodyHeader
