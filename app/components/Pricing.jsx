import React from "react";

function Pricing() {
  return (
    <div id="pricing" className="w-[90%] mx-auto md:w-[900px]  rounded-lg bg-slate-200 dark:bg-[#2d3b51] p-9 pt-9">
      <h1 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300">
        API Pricing
      </h1>
      <p className="dark:text-white mb-3">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-white border border-gray-700 dark:border-gray-500">
          <thead>
            <tr className="bg-indigo-500">
              <th className="px-4 py-3 text-left">API</th>
              <th className="px-4 py-3 text-left">MODEL</th>
              <th className="px-4 py-3 text-left">Price per 1K tokens</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 dark:border-gray-500 bg-white text-black dark:bg-[#2d3b51] dark:text-white"
              >
                <td className="px-4 py-3">
                  {item.parameter}
                </td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300">
          Token Estimation
        </h2>
        <p className="dark:text-white">
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
        <h2 className="text-indigo-500 capitalize mt-6 font-bold text-xl dark:text-indigo-300">
          Billing
        </h2>
        <p className='dark:text-white'>
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
}

export default Pricing;

const tableData = [
  {
    parameter: "OpenAI",
    type: "GPT-3.5",
    description: "$0.002",
  },
  {
    parameter: "OpenAI",
    type: "GPT-4",
    description: "$0.03",
  },
  {
    parameter: "Together AI",
    type: "Llama-2-70b",
    description: "$0.0008",
  },
  {
    parameter: "Together AI",
    type: "Llama-2-13b",
    description: "$0.0006",
  },
];
