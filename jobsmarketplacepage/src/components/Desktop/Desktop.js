import DesktopNav from "./DesktopNav"
import DesktopBody from "./DesktopBody"
import { JobsData } from "../JobsData"
import { useState } from "react"



function Desktop(){
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <>
        <DesktopNav searchTerm={searchTerm} onSearch={setSearchTerm}/>
        <DesktopBody JobsData={JobsData} searchTerm={searchTerm} />
        </>
    )
}
export default Desktop
