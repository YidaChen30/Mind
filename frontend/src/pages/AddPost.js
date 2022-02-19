import React from "react"
import { useState } from "react";
import { Header } from "../components/Header";

export const AddPost = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const  PingBackend = async () => {
    await fetch('http://localhost:6161/ping', {
      method: 'GET'
    }).then(res => res.text())
      .then(res => console.log(res))
  }

  return(
  <div>

    <Header/>

    <div className="addpostdiv">

      <div className="titleflex">
        <textarea placeholder="Your title here" onChange = {(newTitle) => {
          setTitle(newTitle.target.value)
        }} className="titletextarea"/>
      </div>

      <textarea placeholder="Ramble here" onChange = {(newContent) => {
        setContent(newContent.target.value)
      }} type="text" className="contentinput"/>

      <br/>

      <div className="nameflex">
        <div>

          <textarea style={{marginRight: "-8px", height: "30px"}} placeholder="Your name here" onChange = {(newName) => {
              setName(newName.target.value)
            }}/>

          <br/>

          <button style={{marginRight: "-6px", float: "right"}} onClick={() => {
            PingBackend()
          }}>submit</button>

        </div>
      </div>


    </div>

  </div>
  )
}