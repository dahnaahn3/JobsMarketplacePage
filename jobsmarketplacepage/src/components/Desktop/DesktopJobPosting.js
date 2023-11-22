
import { UilClock, UilTimesSquare, UilCalender, UilUsdCircle, UilBookmark, UilCommentAlt, UilExpandAlt, UilEllipsisV } from '@iconscout/react-unicons';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import DesktopSearchBar from './DesktopSearchBar';


function DesktopJobPosting({ MockData, experienceLevel, date }) {
const [selectedId, setSelectedId] = useState(null);
const [searchTerm, setSearchTerm] = useState("")

const filteredData = MockData.filter(
  (m) =>
    (m.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.position_title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (experienceLevel.length === 0 || experienceLevel.includes(m.level)) && (
      date.length === 0 || date.toString().includes(m.available_until)
    )
);



  return (
    <>
    <DesktopSearchBar onSearch={setSearchTerm}/>
      {filteredData.map(m => {
        let bookmark;
        if (m.bookmarked === false) {
          bookmark = <p className="box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"><UilBookmark /></p>;
        } else {
          bookmark = <p className="box-border border-2 bg-green-200 text-green-600 border-green-600 p-2 rounded-full"><UilBookmark /></p>;
        }

        return (
          <div key={m.id}>
            <ul className="p-5 flex flex-col space-y-4">
              <li className="p-3 box-border border-4">
                <motion.div
                  initial={{ height: "max" }}
                  animate={{ height: selectedId === m.id ? "max" : "max"}}>
                  <motion.div className="flex flex-row justify-between">
                    <motion.div className="text-purple-600 font-bold">{m.company}</motion.div>
                    <motion.div className="flex space-x-6">
                    {selectedId !== m.id && (<motion.button
                      layoutId={m.id}
                      layout="position"
                      onClick={() => setSelectedId(m.id)}

                      >
                        <UilExpandAlt/> </motion.button>)}
                      <motion.button><UilEllipsisV /></motion.button>
                    </motion.div>
                  </motion.div>
                  <motion.p className="text-3xl pb-3 font-bold">{m.position_title}</motion.p>
                  <motion.div className="flex flex-row space-x-5">
                    <motion.p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.location}</motion.p>
                    <motion.p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.work_type}</motion.p>
                    <motion.p className="text-purple-600 bg-purple-200 rounded-full pl-2 pr-2">{m.salary_range}</motion.p>
                  </motion.div>
                  <motion.div className="pt-3 pb-3 top-element-formatting ">
                    <span className="font-bold">About: </span>
                    <span className="second-word-formatting">{m.description}</span>
                  </motion.div>
                  <motion.div className="flex flex-row justify-between">
                    <motion.div className="flex flex-row space-x-5 pt-2">
                      <motion.p className="flex"><UilClock />{m.available_until}</motion.p>
                      <motion.p className="flex"><UilCalender />{m.days_posted_ago}</motion.p>
                      <motion.p className="flex"><UilUsdCircle />{m.employee_bonus}</motion.p>
                    </motion.div>
                    <motion.div className="flex flex-row space-x-5">
                      <span>{bookmark}</span>
                      <motion.p className="flex box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"><UilCommentAlt className="mr-2" />{m.contact}</motion.p>
                      <button className="bg-purple-600 text-white rounded-full pl-3 pr-3">Apply</button>
                    </motion.div>
                  </motion.div>

                  <AnimatePresence>
                  {selectedId === m.id && (
                    <motion.div className="pl-4"

                    layoutId={selectedId}>
                    <div className='py-4'>
                    <motion.h1 className='text-lg font-bold'>Requirements</motion.h1>
                    {m.skills.map((skill)=>(
                        <motion.li className='list-disc'>{skill}</motion.li>
                    ))}
                    </div>
                    <hr />

                    {Object.entries(m.benefits).map(([title, description])=>(
                        <div className='py-4'>
                        <motion.p className='text-lg font-bold'>{title}</motion.p>
                        <motion.p>{description}</motion.p>
                        </div>
                    ))}
                    <hr />
                    <motion.p className='py-4'>The company is an equal opportunity employer and will consider all applications
                        without regards to race, sex, age, color, religion, national origin,
                        veteran status, disability, sexual orientation, gender identity,
                         genetic information or any characteristic protected by law.</motion.p>


                    <motion.p className='flex justify-end' onClick={() => setSelectedId(null)}> <UilTimesSquare/></motion.p>

                    </motion.div>
                  )}

                </AnimatePresence>
                </motion.div>

              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default DesktopJobPosting;
