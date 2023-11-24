import DesktopNav from "./DesktopNav"
import DesktopBody from "./DesktopBody"
import { JobsData } from "../JobsData"
import { useState } from "react"
import { ProfileData } from "../ProfileData"



function Desktop(){
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <>
        <DesktopNav ProfileData={ProfileData}searchTerm={searchTerm} onSearch={setSearchTerm}/>
        <DesktopBody JobsData={JobsData} searchTerm={searchTerm} />
        </>
    )
}
export default Desktop
