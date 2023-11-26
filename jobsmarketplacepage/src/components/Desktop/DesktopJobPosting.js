
import { UilClock, UilTimesSquare, UilCalender, UilUsdCircle,
  UilBookmark, UilCommentAlt, UilExpandAlt, UilEllipsisV,
  UilShareAlt, UilLink,  UilEyeSlash, UilUserPlus  } from '@iconscout/react-unicons';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegFlag } from "react-icons/fa6";



function DesktopJobPosting({ JobsData, experienceLevel, date, onsiteOrRemote, searchTerm }) {
const [selectedId, setSelectedId] = useState(null); /* selected ID for info expansion */
const [isOpen, setIsOpen] = useState(false) /* setting whether options is open or not */
const [optionsId, setOptionsId] = useState(null) /* setting ID for the specific options dropdown being opened */

const handleOpen = () => {
  setIsOpen(!isOpen)
}

const filteredData = JobsData.filter(
  (m) =>
    (m.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.position_title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (experienceLevel.length === 0 || experienceLevel.includes(m.level)) &&
    (date.length === 0 || date.toString().includes(m.available_until)) &&
      (onsiteOrRemote.length ===0 || onsiteOrRemote.includes(m.onsite_or_remote))
);

  return (
    <>
      {filteredData.map(m => {
        let bookmark;
        if (m.bookmarked === false) {
          bookmark = <p className="box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"><UilBookmark /></p>;
        } else {
          bookmark = <p className="box-border border-2 bg-green-200 text-green-600 border-green-600 p-2 rounded-full"><UilBookmark /></p>;
        }

        return (
          <div key={m.id}>
            <ul className="flex flex-col space-y-4" style={{paddingBottom:"16px"}}>
              <li className="p-3 box-border border-2 border-slate-300 bg-white">
                <div>

<div className='flex justify-between '
style={{width:"1216px"}}>
      <div className="text-purple-600 font-bold">{m.company}</div>

        <div>
            {selectedId !== m.id &&
            (<motion.button
              layoutid={m.id}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedId(m.id)}><UilExpandAlt/> </motion.button>)}

              <button
              className='p-2'
              onClick={() => {
                handleOpen()
                setOptionsId(m.id)}}>
                <UilEllipsisV />
                </button>

                      {optionsId === m.id && isOpen && (
                        <div className='absolute bg-white border border-slate-300 rounded-lg p-2'>
                        <ul >
                        <li className='hover:text-purple-600 flex'>
                          <UilShareAlt style={{ marginRight: '8px' }} />
                          Share
                        </li>
                          <li className='hover:text-purple-600 flex'>
                            <UilLink style={{ marginRight: '8px' }}/>
                            Copy
                          </li>
                          <li className='hover:text-purple-600 flex'>
                            <UilEyeSlash style={{ marginRight: '8px' }}/>
                            Hide
                          </li>
                          <li className='hover:text-purple-600 flex'>
                            <UilUserPlus style={{ marginRight: '8px' }}/>
                            Follow
                          </li>
                          <li className='hover:text-purple-600 flex'>
                            <FaRegFlag style={{ marginRight: '8px' }}/>
                            Report
                          </li>
                        </ul>
                        </div>
              )}
        </div>
</div>

                  <p className="text-3xl pb-3 font-bold">{m.position_title}</p>
                  <div className="flex flex-row space-x-5">
                    <p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.location}</p>
                    <p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.work_type}</p>
                    <p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.salary_range}</p>
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
                    <div className="flex flex-row space-x-5">
                      <span>{bookmark}</span>
                      <p className="flex box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"><UilCommentAlt className="mr-2" />{m.contact}</p>
                      <button className="bg-purple-600 text-white rounded-full pl-3 pr-3">Apply</button>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedId === m.id && (
                    <motion.div className="pl-4"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}


                    layoutid={selectedId}
                    >
                    <div className='py-4'>
                    <hr />
                    <div className="inline-flex flex-row space-x-5 py-3">
                      <div className='flex flex-row space-x-2'>
                      <p className='text-lg font-bold'>Level: </p>
                      <p>{m.level}</p>
                      </div>
                      <div className='inline-flex flex-row space-x-2'>
                      <p className='text-lg font-bold'>Work type: </p>
                      <p>{m.onsite_or_remote}</p>
                      </div>
                    </div>
                    <h1 className='text-lg font-bold'>Requirements</h1>
                    {m.skills.map((skill)=>(
                        <li className='list-disc'>{skill}</li>
                    ))}
                    </div>
                    <hr />
                    {Object.entries(m.benefits).map(([title, description])=>(
                        <div className='py-4'>
                        <p className='text-lg font-bold'>{title}</p>
                        <p>{description}</p>
                        </div>
                    ))}
                    <hr />
                    <p className='py-4'>The company is an equal opportunity employer and will consider all applications
                        without regards to race, sex, age, color, religion, national origin,
                        veteran status, disability, sexual orientation, gender identity,
                        genetic information or any characteristic protected by law.</p>
                    <p className='flex justify-end' onClick={() => setSelectedId(null)}> <UilTimesSquare/></p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default DesktopJobPosting;
