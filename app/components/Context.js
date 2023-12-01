"use client"
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext();

function Context({children}) {
  const [member, setMember] = useState();

  

  const memberLd = () => {
    axios.get(`/api/member`) 
    .then(res=>{
      console.log(res);
    })
  }

  useEffect(()=>{
    memberLd()
  }, [])

  return (
    <myContext.Provider>
        {children}
    </myContext.Provider>
  )
}

export default Context
