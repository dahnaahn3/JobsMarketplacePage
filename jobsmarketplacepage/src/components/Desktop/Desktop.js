import DesktopNav from "./DesktopNav"
import DesktopBody from "./DesktopBody"
import { MockData } from "../MockData"



function Desktop(){


    return(
        <>
        <DesktopNav />
        <DesktopBody MockData={MockData} />
        </>
    )
}
export default Desktop
