import React from "react";

function Authentication() {
  return (
    <div id="Authentication" className="w-[90%] mx-auto md:w-[900px]  rounded-lg bg-slate-200 dark:bg-[#2d3b51] p-9 pt-5">
      <h1 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300">
        Authentication
      </h1>
      <p className="dark:text-white">
        To use the API, you need to include your API key in the header of each
        request:
      </p>
      <div className="border border-slate-600 h-14">
        <p className="pt-3 dark:text-white ml-5 border border-slate-600 px-1 flex justify-center items-center w-[230px] h-full">
          X-API-Key: YOUR_API_KEY
        </p>
      </div>
      <p className="dark:text-white">
        To generate an API key, use the button below:
      </p>
      <button className="rounded-md text-black bg-[#6ddaff] px-5 py-2 mt-3 hover:bg-blue-500">Generate API key</button>
      <div className='mt-4 border border-slate-600 px-1 pt-2'>
        <p className='dark:text-white overflow-auto p-2 '>Your API Key: <span className='font-bold'>{"QS9ZFyYFoFGr8alunRwBZ19kCbiCcw4IdW7lWytcv6Y"}</span></p>
      </div>
    </div>
  );
}

export default Authentication;
