import React from "react";

function Overview() {
  return (
    <div sectionids="overview" className="w-[90%] mx-auto md:w-[900px] rounded-lg bg-slate-200 dark:bg-[#2d3b51] p-9 pt-5">
      <h1 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300">Overview</h1>
      <p className='dark:text-white'>
        {"The Book Generator API allows you to generate books on various topics\
        using different language models. This documentation provides details on\
        how to use the API, including authentication, available endpoints, and\
        code examples."}
      </p>
    </div>
  );
}

export default Overview;
