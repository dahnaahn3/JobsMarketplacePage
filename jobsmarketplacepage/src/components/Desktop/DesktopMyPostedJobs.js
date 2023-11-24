import { JobsData } from "../JobsData"
import {UilEye, UilEyeSlash} from '@iconscout/react-unicons'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const DesktopMyPostedJobs = () => {

    const[isOpen, setisOpen] = useState(false); /* setting if jobs is expanded */

    const[showButton, setShowButton] = useState(true) /* setting if button is visable */

    function handleOpen(){
        setisOpen(!isOpen)
    }

    function handleButton(){
        setShowButton(!showButton)
    }

  return (
    <div>
        <motion.div
        initial ={{height: "max"}}
        animate={{height: isOpen === true ? "max": "max"}}
        className="relative flex flex-col mb-3 mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500">
            <h1 className="text-xl pt-3 pb-3 pl-3 font-bold"> My posted jobs </h1>
            <hr />
            {JobsData.slice(0,3).map(m =>{
                return(
                    <ul key={m.id} className="pt-3 pl-3 flex items-center space-x-4 space-y-2">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">{m.company[0]}</div>
                        <div>
                        <li className="text-lg font-semibold">{m.position_title}</li>
                        <li className="text-gray-600">Company: {m.company}</li>
                        </div>
                    </ul>
                )
            })}

        <AnimatePresence>
        {isOpen &&
        JobsData.slice(3).map(m =>{
                return(
                    <div>
                    <ul key={m.id} className="pt-3 pl-3 flex items-center space-x-4 space-y-2">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">{m.company[0]}</div>
                        <div>
                        <li className="text-lg font-semibold">{m.position_title}</li>
                        <li className="text-gray-600">Company: {m.company}</li>
                        </div>
                    </ul>
                    </div>
                )
            })}
        </AnimatePresence>

        <div className="p-3">
        {isOpen && <button
        className="bg-purple-300 justify-center flex w-full text-purple-600 text-white rounded-full p-2"
        onClick={() => {handleOpen(null); handleButton(null)}}> <UilEyeSlash/>View less </button>}
        </div>
    
        <div className="p-3">
            {showButton && <button
            className="bg-purple-300 justify-center flex w-full text-purple-600 text-white rounded-full p-2"
            onClick={() =>{handleOpen(); handleButton()}}>
            <UilEye />View more</button>}
        </div>

        </motion.div>

    </div>
  )
}
