import MobileNav from "./MobileNav"
import MobileBody from "./MobileBody"
import MobileFooter from "./MobileFooter"
import { useState } from "react"

function Mobile(){

const [searchTerm, setSearchTerm] = useState("")


    return(
        <>
        <MobileNav onSearch={setSearchTerm} searchTerm={searchTerm} />
        <MobileBody searchTerm={searchTerm}/>
        <MobileFooter />
        </>
    )
}

export default Mobile
