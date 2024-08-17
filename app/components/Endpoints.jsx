import React from "react";

function Endpoints() {
  return (
    <div id="endpoints" className="w-[90%] mx-auto md:w-[900px]  rounded-lg bg-slate-200 dark:bg-[#2d3b51] p-9 pt-5">
      <h1 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300">
        Endpoints
      </h1>
      <h2 className="text-indigo-500 capitalize mt-6 font-bold text-lg dark:text-indigo-300">
        Generate Book
      </h2>

      <button className="px-3 py-0.5 bg-[#6ddaff] rounded-md font-bold mr-3">
        POST
      </button>
      <button className="px-3  bg-indigo-500 text-white p-3 rounded-md font-bold">
        /api/generate-book
      </button>
      <h1 className="text-indigo-500 capitalize mt-10 font-bold text-xl dark:text-indigo-300 mb-5">
        Request body
      </h1>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-white border border-gray-700 dark:border-gray-500">
          <thead>
            <tr className="bg-indigo-500">
              <th className="px-4 py-3">PARAMETER</th>
              <th className="px-4 py-3">TYPE</th>
              <th className="px-4 py-3 text-left">DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 dark:border-gray-500 bg-white text-black dark:bg-[#2d3b51] dark:text-white"
              >
                <td className="px-4 py-3 text-blue-400 font-bold">
                  {item.parameter}
                </td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="text-indigo-500 capitalize mt-6 font-bold text-lg dark:text-indigo-300">
          Response
        </h1>
        <div className='bg-white dark:bg-[#2d3b51] text-black dark:text-white p-2 border border-slate-500'>
          <p className='mb-6'>import random</p>
          <p>{"def random_color():"}</p>
          <p className='ml-7 mb-4'>{"return '#{:06x}'.format(random.randint(0, 0xFFFFFF))"}</p>
          <p>{"print(random_color())"}</p>
        </div>
      </div>
    </div>
  );
}

export default Endpoints;

const tableData = [
  {
    parameter: "api",
    type: "string",
    description: 'The API provider to use. Options: "openai" or "together"',
  },
  {
    parameter: "model",
    type: "string",
    description:
      'The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")',
  },
  {
    parameter: "topic",
    type: "string",
    description: "The main topic or theme of the book",
  },
  {
    parameter: "language",
    type: "string",
    description: "The language in which the book should be generated",
  },
  {
    parameter: "word_count",
    type: "integer",
    description: "The approximate number of words for the generated book",
  },
];
