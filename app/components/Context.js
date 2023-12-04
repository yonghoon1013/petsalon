"use client"
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext();

function Context({children}) {
  // const [member, setMember] = useState();
  const [profView, setProfView] = useState();
  const sKey = sessionStorage.getItem("key");

  const profLd = async () => {
    await axios.get(`/api/profPic?key=${sKey}`)
    .then(res=>{
        setProfView(res.data[0].imgUrl);
    });
  }

  useEffect(()=>{
    profLd();
  }, [])



  // const memberLd = () => {
  //   axios.get(`/api/member`) 
  //   .then(res=>{
  //     console.log(res);
  //   })
  // }

  // useEffect(()=>{
  //   memberLd()
  //   console.log("hehe")
  // }, [])

  return (
    <myContext.Provider value={{profView}}>
        {children}
    </myContext.Provider>
  )
}

export default Context
