import { JobsData } from "../JobsData";
import { UilClock, UilCalender, UilUsdCircle, UilBookmark, UilCommentAlt, UilExpandAlt } from '@iconscout/react-unicons';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState } from "react";



const MobileBody = ({searchTerm}) => {

const [selectedId, setSelectedId] = useState(null)

const {scroll} = useScroll()

const filteredData = JobsData.filter(
    (j) =>
    (j.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (j.position_title.toLowerCase().includes(searchTerm.toLowerCase())))
)

console.log(selectedId)

return (
<div className="bg-slate-200">

{filteredData.map(m => {
    let bookmark;
    if (m.bookmarked === false) {
        bookmark = <p className="box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"><UilBookmark /></p>
    } else {
        bookmark = <p className="box-border border-2 bg-green-200 text-green-600 border-green-600 p-2 rounded-full"><UilBookmark /></p>
    }

    return (
<div key={m.id}>
    <div>
        <ul className="p-2 flex flex-col space-y-4 w-full">
        <li className="p-3 bg-white box-border border-4">

                <motion.div
                onClick={()=>setSelectedId(m.id)}
                layout="position"
                className="flex flex-row justify-between">

                <div className="text-purple-600 font-bold">{m.company}</div>
                {selectedId !==m.id && (
                <button><UilExpandAlt /></button>)}
                </motion.div>


                    <p className="text-xl pb-3 font-bold">{m.position_title}</p>
                    <div className="flex flex-row space-x-5">
                        <p className="text-purple-600 bg-purple-200 rounded-full text-xs pt-1 pb-1 pl-2 pr-2">{m.location}</p>
                        <p className="text-purple-600 bg-purple-200 rounded-full text-xs pt-1 pb-1 pl-2 pr-2">{m.work_type}</p>
                        <p className="text-purple-600 bg-purple-200 rounded-full text-xs pt-1 pb-1 pl-2 pr-2">{m.salary_range}</p>
                    </div>

                    <div className="pt-3 pb-3 top-element-formatting ">
                        <span className="font-bold">About: </span>
                        <span className="second-word-formatting">{m.description}</span>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row space-x-5 pt-2">
                            <p className="flex"><UilClock />{m.available_until}</p>
                            <p className="flex"><UilCalender />{m.days_posted_ago}</p>
                            <p className="flex"><UilUsdCircle />{m.employee_bonus}</p>
                        </div>
                    </div>

                <div className="flex items-end mt-3 justify-end space-x-5">
                    <span>{bookmark}</span>
                    <span className="box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"> <UilCommentAlt /></span>
                </div>
        </li>
        </ul>

        <AnimatePresence>
        {selectedId === m.id && (
        <motion.div
        initial={{ translateY: "100%" }}
        animate={{ translateY: 0 }}
        exit={{ translateY: "100%" }}
        className="bg-white border-4 border-purple-500 fixed px-3 mx-3 inset-x-0 bottom-0 scrollable-container"
        style={{
            overflowY: "auto",
            maxHeight: `calc(80vh - 20px)`,
            scroll,
          }}
        >
            <div className="flex py-2 justify-between ">
                <p className="text-purple-600 font-bold">{m.company}</p>
                <button onClick={()=> setSelectedId(null)}>X</button>
            </div>

            <div>
                <p className="text-3xl pb-3 font-bold text-center">{m.position_title}</p>
                <div className="flex justify-center py-2 space-x-2">
                    <p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.location}</p>
                    <p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.work_type}</p>
                    <p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.salary_range}</p>
            </div>

            <div className="text-center py-2">
                <span className="font-bold">About:{" "}</span>
                <span>{m.description}</span>
            </div>

            <div className="flex flex-row justify-center py-2">
                <div className="flex flex-row space-x-5 pt-2">
                    <p className="flex"><UilClock />{m.available_until}</p>
                    <p className="flex"><UilCalender />{m.days_posted_ago}</p>
                    <p className="flex"><UilUsdCircle />{m.employee_bonus}</p>
                </div>
            </div>

            <div className="flex justify-between px-5 py-3">
                <div>
                <span className="font-bold">Level:{" "}</span><span>{m.level}</span>
                </div>
                <div>
                <span className="font-bold">Work Type:{" "}</span><span>{m.onsite_or_remote}</span>
                </div>
            </div>

            <div>
                <h1 className='text-lg font-bold'>Requirements</h1>
                    {m.skills.map((skill)=>(
                        <li className='list-disc'>{skill}</li>
                    ))}
            </div>

            <div className="py-3">
            {Object.entries(m.benefits).map(([title, description])=>(
                        <div className=''>
                        <motion.p className='text-lg font-bold'>{title}</motion.p>
                        <motion.p>{description}</motion.p>
                        </div>
                    ))}
            </div>
    <hr />
            <p className=' mb-10 py-2'>The company is an equal opportunity employer and will consider all applications
                        without regards to race, sex, age, color, religion, national origin,
                        veteran status, disability, sexual orientation, gender identity,
                        genetic information or any characteristic protected by law.</p>

            </div>
            </motion.div>
        )}
        </AnimatePresence>

    </div>

    </div>
    )
})}
</div>
)
}

export default MobileBody;
