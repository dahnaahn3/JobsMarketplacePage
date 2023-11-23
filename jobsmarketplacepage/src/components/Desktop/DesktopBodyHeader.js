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
      <div className="pl-3 pt-3">
      <ul className="p-2 bg-white border-solid flex flex-row justify-center space-x-10">
          <li className="hover:text-purple-300">Latest Posts</li>
          <li className="hover:text-purple-300">Recent Activities</li>
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
