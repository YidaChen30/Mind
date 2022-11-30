import React from "react"
import { useState } from "react";
import { Header } from "../components/Header";
import { Alert, AlertTitle, Button, Snackbar } from "@mui/material";

export const AddPost = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [alerts, setAlerts] = useState([])

  const  PingBackend = async () => {
    await fetch('http://localhost:6161/ping', {
      method: 'GET'
    }).then(res => res.text())
      .then(res => console.log(res))
  }

  const SendPost = async () => {
    await fetch('http://localhost:6161/addpost', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'title': title,
        'content': content,
        'author': author
      })
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
              setAuthor(newName.target.value)
            }}/>

          <br/>

          <Button sx={{marginRight: "-6px", float: "right"}} onClick={() => {
            if (title === "" || content === "" || author === "") {
              let problems = []
              if (title === "") {
                problems.push('title')
              }
              if (content === "") {
                problems.push('content')
              }
              if (author === "") {
                problems.push('author')
              }
              setAlerts(problems)
            }
            else {
              SendPost()
            }
            
          }}>submit</Button>
        </div>
      </div>
    </div>
    <Snackbar>
      <Alert>
        <AlertTitle>Ruh Roh</AlertTitle>
        Please fill in <strong>{alerts.map((entry) => entry)}</strong> section {alerts.length > 1 ? "s" : ""}
      </Alert>
    </Snackbar>
  </div>
  )
}