"use client"
import React, { createContext } from 'react'

export const myContext = createContext();

function Context({children}) {

  function test = () => {
    console.log("hehe")
  }
 
  return (
    <myContext.Provider>
        {children}
    </myContext.Provider>
  )
}

export default Context
