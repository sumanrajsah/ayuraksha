"use client"
import React, { useState } from "react"
import Navbar from "../components/navbar"
import './style.css'
import { AttachmentIcon, UpSideArrow } from "../components/svg"
import axios from "axios"


export default function Ai(){
    const [ai,setAi]=useState('')
    const [message,setMessage]=useState('')
    const [generating,setGenerating]=useState(false)

    async function talkAi(){
        setAi('')
        setGenerating(true)
        try{
            const response = await axios.post('/api/ai',{message:message});
            if(response.status){
                setAi(response.data.output);
                setGenerating(false)
            }
        }catch(e){

        }
    }
    
    
    return(
        <main className="ai-main">
            <Navbar/>
            <div className="ai-body">
                <div className="ai-window">
                    <div className="ai-chat-window">
                 {!ai &&  <p>Hi! 👋 How can I help you today? 😊</p>}
                    {generating&&<p className="ai-response">Generating...</p>}
                    {ai && <pre className="ai-response" dangerouslySetInnerHTML={{ __html: ai.replace(/<[^>]+>/g, '').replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\*(.*?)\*/g, '<li>$1</li>') }} /> }
                    </div>
                <div className="ai-input-cont">
                <div className="ai-attach-icon">
                    <AttachmentIcon/>
                    </div>
                   <textarea className="text-area" onChange={(e)=>setMessage(e.target.value)} />
                   <div className="ai-search-icon" onClick={talkAi}>
                    <UpSideArrow/>
                   </div>
                </div>
                
                </div>
            </div>
        </main>
    )
}