import { MockData } from "./MockData"
import { UilClock, UilCalender, UilUsdCircle, UilBookmark, UilCommentAlt, UilExpandAlt, UilEllipsisV} from '@iconscout/react-unicons'


function DesktopJobPosting(){
    return(
    <>
    {MockData.map(m =>{
        return(
            <>
                <ul className="p-5 flex flex-col space-y-4">
                    <li className="p-3 box-border border-4">
                        <div className="flex flex-row justify-between">
                            <div className="text-purple-600 font-bold">{m.company}</div>
                            <div className="flex space-x-6">
                                <UilExpandAlt />
                                <UilEllipsisV />
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
                                <p className="flex"><UilClock/>{m.available_until}</p>
                                <p className="flex"><UilCalender />{m.days_posted_ago}</p>
                                <p className="flex"><UilUsdCircle/>{m.employee_bonus}</p>
                            </div>
                            <div className="flex flex-row space-x-5">
                                <p className="box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"><UilBookmark /></p>
                                <p className="flex box-border border-2 text-purple-600 border-purple-600 p-2 rounded-full"><UilCommentAlt className="mr-2"/>{m.contact}</p>
                                <button className="bg-purple-600 text-white rounded-full pl-3 pr-3">Apply</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
        )
    })}
    </>
    )
}

export default DesktopJobPosting
