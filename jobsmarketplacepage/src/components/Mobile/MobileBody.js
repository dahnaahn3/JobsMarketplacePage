import { JobsData } from "../JobsData";
import { UilClock, UilCalender, UilUsdCircle, UilBookmark, UilCommentAlt } from '@iconscout/react-unicons';

const MobileBody = () => {
    return (
<div className="bg-slate-200">
{JobsData.map(m => {
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
                <div className="flex flex-row justify-between">
                    <div className="text-purple-600 font-bold">{m.company}</div>
                </div>

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

    </div>

    </div>
    )
})}
</div>
)
}

export default MobileBody;
