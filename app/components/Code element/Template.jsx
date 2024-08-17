import React from "react";

function Template({ title,desc }) {
  return (
    <div className="w-[90%] mx-auto md:w-[900px]  rounded-lg bg-slate-200 dark:bg-[#2d3b51] p-9 pt-9">
      <h2 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300">
        {title}
      </h2>
      <div className="border border-slate-500 p-3 rounded-md mb-5 ">
        <p className='dark:text-white'>{desc}</p>
      </div>
    </div>
  );
}

export default Template;
