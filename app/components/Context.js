"use client"
import React, { createContext } from 'react'

export const myContext = createContext();

function Context({children}) {

  const test = () => {
    console.log("hehe")
  }
 
  const fefe = () => {
    console.log("sdfsd")
  }

  return (
    <myContext.Provider>
        {children}
    </myContext.Provider>
  )
}

export default Context
