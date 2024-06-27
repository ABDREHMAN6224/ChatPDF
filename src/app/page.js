"use client";
import { useState } from "react"
import PdfPicker from "./components/inputs/PdfPicker"
import TextInput from "./components/inputs/TextInput";
import TextArea from "./components/inputs/TextArea";

const Home = () => {
  const [file,setFile] = useState(()=>{
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("file"))||null
    }
  
  })
  const [sourceId,setSourceId] = useState(()=>{
    if (typeof window !== "undefined") {
      localStorage.getItem("sourceId")||""
    }
  })
  const [loading,setLoading] = useState(false)
  const [prompt,setPrompt] = useState("")
  const [response,setResponse] = useState("")
  const [submitting,setSubmitting] = useState(false)
  const uploadToCHatPDF =async (file) => {
    const formData = new FormData();
    formData.append(
      "file",
      file
    );
    const response = await fetch("https://api.chatpdf.com/v1/sources/add-file", {
      method: "POST",
      body: formData,
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY
      }
    })
    const data = await response.json()
    console.log(data?.sourceId)
    setSourceId(data?.sourceId)
    localStorage.setItem("sourceId",data?.sourceId)
    localStorage.setItem("file",JSON.stringify({
      name:file.name,
      size:file.size
    }))

  }

  const submitData = async () => {
    setLoading(true)
    setResponse("")
    if(!prompt){
      alert("Please enter a prompt")
      setLoading(false)
      return
    }
    console.log(prompt);
    const sourceId = localStorage.getItem("sourceId")
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
    <div className="flex flex-col items-center min-h-screen gap-12 px-4 lg:px-20 py-6 xl:px-48" >
      <h1 className="text-4xl font-bold text-primary-500 text-center">
        Chat With Your PDF
      </h1>
      <PdfPicker twstyles={"w-full"}
        onChange={(file) => {
          setFile(file)
          uploadToCHatPDF(file)
        }}
        name={"file"}
        value={file}
      />
    {(file&&!submitting)?
      
    <div className="flex flex-col gap-4 w-2/3 mx-auto">
      <TextInput
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        name={"prompt"}
        required={true}
        placeholder={"Enter your question here"}
        twstyles="bg-transparent"
      />
      <p className="text-gray-500 text-left py-6">
        {response}
      </p>
      <button className="bg-primary-500 text-white py-2 px-2 rounded-md disabled:bg-gray-300"
        onClick={submitData}
        disabled={loading}
      >
        {loading?"Loading...":"Submit"}
      </button>
    </div>:
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-500 text-center">
        Upload a PDF file to get started
      </p>
    </div>
      }
      <div className="flex flex-col items-center gap-4">
        <p className="text-gray-500 text-center">
          Made by Abdul Rehman
        </p>
      </div>
    </div>
  )
}

export default Home