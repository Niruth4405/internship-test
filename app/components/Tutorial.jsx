import React from "react";

function Tutorial() {
  return (
    <div id="tutorial" className="w-[90%] mx-auto md:w-[900px]  rounded-lg bg-slate-200 dark:bg-[#2d3b51] pl-9 pr-9 pt-9">
      <h1 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300 mb-10">Tutorial</h1>
      {data.map((d) => (
        <div key={d.id}>
          <h1 className='text-xl text-indigo-500 dark:text-indigo-300 font-bold'>{d.title}</h1>
          <p className='dark:text-white mb-10'>{d.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Tutorial;

const data = [
  {
    id: 1,
    title: "Step 1: Obtain an API Key",
    desc: "Generate an API key using the button in the Authentication section above.",
  },
  {
    id: 2,
    title: "Step 2: Make a Request",
    desc: "Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.",
  },
  {
    id: 3,
    title: "Step 3: Handle the Response",
    desc: "The API will return a response with a job ID. You can use this ID to check the status of your book generation job.",
  },
  {
    id: 4,
    title: "Step 4: Retrieve the Generated Book",
    desc: "Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).",
  },
];
