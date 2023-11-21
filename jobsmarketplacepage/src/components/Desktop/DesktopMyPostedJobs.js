import { MockData } from "../MockData"
import {UilEye} from '@iconscout/react-unicons'

export const DesktopMyPostedJobs = () => {
  return (
    <div>
        <div className="relative flex flex-col mb-3 mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500">
            <h1 className="text-xl pt-3 pb-3 pl-3 font-bold"> My posted jobs </h1>
            <hr />
            {MockData.map(m =>{
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
            <div className="p-3">
                <button className="bg-purple-300 justify-center flex w-full text-purple-600 text-white rounded-full p-2"> <UilEye />View more</button>
            </div>
        </div>
    </div>
  )
}
