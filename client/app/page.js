"use client"

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Chat, Inputs, SignUp } from "@/components";

const socket = io("http://localhost:3001")

export default function Home() {

  const [chat, setChat] = useState([])
  const [typing, setTyping] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    socket.on("receive_msg", (msg)=> {
      setChat((prev)=> [...prev, msg])
    })

    socket.on("user_typing", (data) => {
      if(!user.current) return
      setTyping((prev) => {
        if (typing.includes(data.user) && data.typing === true) { return prev}
        if (data.typing === false) {
          return prev.filter((user) => user !== data.user)
        }else {
          return [...prev, data.user]
        }
      })
    })

    socket.on("user_typing", (data) => {
      console.log(data)
    })

    socket.on("new_user", (new_user) => {
      setChat([...prev, {content: `${new_user} joined`, type: "server"}])
    })

    return () => {
      socket.off("receive_msg")
      socket.off("new_user")
      socket.off("user_typing")
    }
  }, [])


  socket.on("do_smt", () => {
    console.log("clicked")
  })


  const user = useRef(null)

  console.log(chat)

  return (
      <main className="h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4">
        { user.current ?
        <>
          <Chat chat={chat} user={user.current} typing={typing} />
          <Inputs setChat={setChat} user={user.current} socket={socket} />
        </>
        : <SignUp user={user} socket={socket} input={input} setInput={setInput} />}
      </main>
        );
}
