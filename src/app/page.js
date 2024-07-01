"use client";
import { useState } from "react";
import TextInput from "./components/inputs/TextInput";
import DropdownSelector from "./components/inputs/DropdownSelector";
import Image from "next/image";

const Home = () => {
  const data=[{
    name:"Abraham-Silberschatz-Operating-System-Concepts-10th-2018",
    sourceId:'src_O8Fqns93GxHtPuIGlTPeU'
  },
{
  name:"Assembly Language for x86 Processors 7th Edition",
  sourceId:"src_CaQg66zFY5zcKeMR0cKYO"
},
{
  name:"Fundamental_of_Database_Systems",
  sourceId:"src_8xAHvRpGhf9y2YVZLJx51"
}]
  const [sourceId,setSourceId] = useState(data[0].sourceId)
  const [loading,setLoading] = useState(false)
  const [prompt,setPrompt] = useState("")
  const [response,setResponse] = useState("")
 

  const submitData = async () => {
    setLoading(true)
    setResponse("")
    if(!prompt){
      alert("Please enter a prompt")
      setLoading(false)
      return
    }
    console.log(prompt);

    const data = {
      sourceId,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    };
    const response = await fetch("https://api.chatpdf.com/v1/chats/message", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY
      }
    })
    const responseData = await response.json()
    setResponse(responseData?.content)
    setLoading(false)
  }
  return (
    <div className="flex flex-col items-center min-h-screen w-screen gap-12 px-4 lg:px-20 py-6 lg:py-14 xl:px-48 bg-white dark:bg-gray-700" >
      <div className="flex items-center gap-8 w-full">
        <Image src="/logo.png" width={50} height={50} alt="logo" className="w-auto h-auto"/>
        <h1 className="text-2xl lg:text-4xl font-bold capitalize dark:text-gray-100">
          Book help Bot
        </h1>
      </div>
      <DropdownSelector
            options={data.map((item)=>({label:item.name,value:item.sourceId}))}
            value={sourceId}
            onChange={(e) => setSourceId(e.target.value)}
            styles={"w-full mx-auto"}
            label={"Select Book"}
        />
      <form className="gap-12 flex flex-col items-center w-full"
        onSubmit={(e) => {
          e.preventDefault();
          submitData();
        }}
      >

      <TextInput
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        name={"prompt"}
        required={true}
        placeholder={"Enter your question here"}
        twstyles="bg-transparent w-full"
        label={"Enter your question"}
        />
        {response&&
      <div className="text-gray-500 dark:text-gray-100 text-left py-6 flex flex-col md:flex-row items-baseline gap-3">
        <h3 className="text-lg font-bold">Response:</h3>
        <p className="text-base ">{response}</p>
      </div>
      }

      <button className="bg-primary-500 text-white py-2 rounded-md disabled:bg-gray-300 px-5"
        type="submit"
        disabled={loading}
      >
        {loading?"Loading...":"Submit"}
      </button>
      </form>

      <footer className="text-gray-500 text-center dark:text-gray-300">
        <p>Created by <a href="https://portfolio-arm.netlify.app/" target="_blank" rel="noreferrer">Abdul Rehman Memon</a></p>
      </footer>

    </div>
  )
}

export default Home