
import ClosingDate from "./DropdownOptions/ClosingDate"
import { ExperienceLevel } from "./DropdownOptions/ExperienceLevel"
import { MyNetwork } from "./DropdownOptions/MyNetwork"
import { OnsiteRemote } from "./DropdownOptions/OnsiteRemote"



function DesktopDropdownMenus({experienceLevel, onExperienceLevel, date, onSetDate, onsiteOrRemote, onOnsiteOrRemote}){

const handleReset=()=>{
  onExperienceLevel([]);
  onSetDate('');
  onOnsiteOrRemote([])
}

return (
<>
<div >
<ul  className="flex p-5 text-center">
<ExperienceLevel
experienceLevel={experienceLevel}
onExperienceLevel={onExperienceLevel} />

<ClosingDate
date={date}
onSetDate={onSetDate}
/>

<OnsiteRemote
onOnsiteOrRemote={onOnsiteOrRemote}
onsiteOrRemote={onsiteOrRemote}
/>

<MyNetwork />

<div className="text-black h-max w-max bg-primary-700 m-3 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
  <button onClick={handleReset}>Reset Filters</button>
</div>

</ul>



</div>




</>
  )
}

export default DesktopDropdownMenus
