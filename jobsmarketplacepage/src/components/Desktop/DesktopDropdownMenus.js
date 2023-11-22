
import ClosingDate from "./DropdownOptions/ClosingDate"
import { ExperienceLevel } from "./DropdownOptions/ExperienceLevel"


function DesktopDropdownMenus({experienceLevel, onExperienceLevel}){

return (
<>
<div style={{width: "70%"}}>
  <ul  className="flex p-5 text-center">
<ExperienceLevel
experienceLevel={experienceLevel}
onExperienceLevel={onExperienceLevel} />

<ClosingDate />

</ul>

</div>



</>
  )
}

export default DesktopDropdownMenus
