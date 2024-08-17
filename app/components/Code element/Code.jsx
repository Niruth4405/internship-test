import React from "react";
import Template from "./Template";

function Code() {
  return (
    <div
      id="code-examples"
      className="w-[90%] mx-auto md:w-[900px]  rounded-lg bg-slate-200 dark:bg-[#2d3b51] pt-9"
    >
      <h1 className="text-indigo-500 capitalize mt-6 font-bold text-2xl dark:text-indigo-300 pl-9 pb-9">
        Code Examples
      </h1>
      <Template
        title={"Python"}
        desc={
          "import requests \
\
API_KEY = 'your_api_key_here' \
API_ENDPOINT = 'https://tryBookAI.com/api/generate-book' \
\
headers = { \
    'Content-Type': 'application/json', \
    'X-API-Key': API_KEY \
} \
\
data = { \
    'api': 'openai', \
    'model': 'gpt-3.5-turbo', \
    'topic': 'The Future of Artificial Intelligence', \
    'language': 'English', \
    'word_count': 5000 \
} \
\
response = requests.post(API_ENDPOINT, json=data, headers=headers) \
\
if response.status_code == 200: \
    result = response.json() \
    print(f'Book generation started. Job ID: {result['job_id']}') \
else: \
    print(f'Error: {response.status_code} - {response.text}') \
"
        }
      />
      <Template
        title={"JavaScript(Node.js)"}
        desc={
          "const axios = require('axios'); \
\
const API_KEY = 'your_api_key_here'; \
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book'; \
\
const headers = { \
    'Content-Type': 'application/json', \
    'X-API-Key': API_KEY \
}; \
\
const data = { \
    api: 'openai', \
    model: 'gpt-3.5-turbo', \
    topic: 'The Future of Artificial Intelligence', \
    language: 'English', \
    word_count: 5000 \
}; \
\
axios.post(API_ENDPOINT, data, { headers }) \
    .then(response => { \
        console.log(`Book generation started. Job ID: ${response.data.job_id}`); \
    }) \
    .catch(error => { \
        console.error('Error:', error.response ? error.response.data : error.message); \
    }); \
"
        }
      />
    </div>
  );
}

export default Code;
