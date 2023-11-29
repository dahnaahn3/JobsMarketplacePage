import { DesktopMyPostedJobs } from "./DesktopMyPostedJobs"
import DesktopSavedReferral from "./DesktopSavedReferral"
import { Rating } from "react-simple-star-rating"
import { useState } from "react"


function DesktopProfile({ProfileData}){

const [rating, setRating] = useState(0)

const handleRating = (rate) => {
    setRating(rate)}


return(
<>
{ProfileData.map(p => {
    let online;
    if(p.online===true){
        online=<div className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 border-white border-2 rounded-full"></div>

    }
    return(
<div>
<div key={p.id} className="flex flex-col static pb-3" style={{width:"400px"}}>
    <div className="justify-center items-center">
        <div className="flex flex-col items-center mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500">
            <div style ={{background: "linear-gradient(0deg, rgba(74,61,84,1) 20%, rgba(220,183,255) 50%)"}} className="relative flex h-32 w-full justify-center rounded-xl" >
                <div className="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] bg-white border-black">
                    <img className="h-full w-full rounded-full" src={p.photo} alt="" />
                {online}
            </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                    {p.name}
                </h4>
                <p className="text-base font-normal text-gray-600">{p.position}</p>
                <p className="text-base font-normal text-gray-600">{p.location}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Rating onClick={handleRating}
              SVGstyle={{'display': 'inline'}} />
            </div>

            <div className="m-6 p-3 w-full" style={{backgroundColor: "#dcd7fe"}}>
                <div className="text-base font-normal text-gray-600 mb-3">Profile Completeness</div>
                <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 dark:bg-gray-700">
                        <div className="h-2.5 rounded-full" style={{ width: "45%", backgroundColor: "#7367f0"}}></div>
                    </div>
                    <p className="text-right">45%</p>
                </div>
            </div>

        </div>
    </div>

    <div className="flex bg-white pl-5 pb-3 justify-start">
        <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✔</span>
                </div>
                <h2 className="text-lg font-medium text-purple-500">Step 1</h2>
                </div>
                <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold"></span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">Step 2</h2>
                </div>
                <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold"></span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">Step 3</h2>
                </div>
                <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold"></span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">Step 4</h2>
                </div>
            </div>
    </div>
</div>

<DesktopMyPostedJobs />
<DesktopSavedReferral />
</div>
)
})}
</>
)}

export default DesktopProfile
