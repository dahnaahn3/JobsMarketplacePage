import { MockData } from "./MockData"
import { UilEye } from '@iconscout/react-unicons'

function DesktopProfile(){
    return(
<>
<div className="flex flex-col pb-3">
    <div class="justify-center items-center">
        <div class="relative flex flex-col items-center mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500">
            <div style ={{background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(119,119,221,1) 58%)"}} class="relative flex h-32 w-full justify-center rounded-xl" >
                <div class="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] bg-white border-black">
                    <img class="h-full w-full rounded-full" src='https://play.nintendo.com/images/PLAY-6148-PikminFriendPageAdditions-Masthead-Blue_v01.b19a16e5.ed4a1562.png' alt="" />
                    <div className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 border-white border-2 rounded-full"></div>
                </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
                <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                Mr. Pikmin
                </h4>
                <p class="text-base font-normal text-gray-600">Staff Member ePosting</p>
                <p class="text-base font-normal text-gray-600">San Francisco</p>
            </div>

            <div class="flex items-center pt-5">
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>

    <div className="bg-purple-200 m-6 p-3 w-full">
        <div class="text-base font-normal text-gray-600 mb-3">Profile Completeness</div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style={{width: "45%"}}></div>
        <p className="text-right">45%</p>
        </div>
    </div>
        </div>
    </div>

    <div className="flex bg-white pl-5 pb-3 justify-start">
        <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✔</span>
                </div>
                <h2 className="text-lg font-medium text-purple-500">Step 1</h2>
                </div>
                <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold"></span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">Step 2</h2>
                </div>
                <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold"></span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">Step 3</h2>
                </div>
                <div className="flex space-x-4 items-start">
                <div className="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
                    <span className="text-white text-sm font-bold"></span>
                </div>
                <h2 className="text-lg font-medium text-gray-800">Step 4</h2>
                </div>
            </div>
    </div>
</div>


<div className="relative flex flex-col mb-3 mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500">
    <h1 className="text-xl pt-3 pb-3 pl-3 font-bold"> My posted jobs </h1>
    <hr />
    {MockData.map(m =>{
        return(
            <div class="pt-3 pl-3 flex items-center space-x-4 space-y-2">
                <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">{m.company[0]}</div>
                <div>
                <h2 class="text-lg font-semibold">{m.position_title}</h2>
                <p class="text-gray-600">Company: {m.company}</p>
                </div>
            </div>
        )
    })}
    <div className="p-3">
        <button className="bg-purple-300 justify-center flex w-full text-purple-600 text-white rounded-full p-2"> <UilEye />View more</button>
    </div>
</div>

<div className="relative flex flex-col mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500">
    <h1 className="text-xl pt-3 pb-3 pl-3 font-bold">My Saved Jobs for Referral </h1>
    <hr />
    {MockData.map(m =>{
        return(
            <div class="pt-3 pl-3 flex items-center space-x-4 space-y-2">
                <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">{m.company[0]}</div>
                <div>
                <h2 class="text-lg font-semibold">{m.position_title}</h2>
                <p class="text-gray-600">Company: {m.company}</p>
                </div>
            </div>
        )
    })}
    <div className="p-3">
        <button className="bg-purple-300 justify-center flex w-full text-purple-600 text-white rounded-full p-2"> <UilEye />View more</button>
    </div>
</div>


</>
    )
}

export default DesktopProfile
