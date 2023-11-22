import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
import { useEffect } from "react";
import DesktopDropdownMenus from "./DesktopDropdownMenus";

function DesktopBodyHeader({experienceLevel, onExperienceLevel}){

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
      <DesktopDropdownMenus
          experienceLevel={experienceLevel}
          onExperienceLevel={onExperienceLevel}/>
    </div>

      </>
    )
}
export default DesktopBodyHeader
