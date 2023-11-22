
import ClosingDate from "./DropdownOptions/ClosingDate"
import { ExperienceLevel } from "./DropdownOptions/ExperienceLevel"



function DesktopDropdownMenus({experienceLevel, onExperienceLevel, date, onSetDate}){

return (
<>
<div style={{width: "70%"}}>
<ul  className="flex p-5 text-center">
<ExperienceLevel
experienceLevel={experienceLevel}
onExperienceLevel={onExperienceLevel} />

<ClosingDate date={date}
onSetDate={onSetDate}
/>

</ul>

</div>



</>
  )
}

export default DesktopDropdownMenus
