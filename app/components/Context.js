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

  const aa = () => {
    console.log('ss');
  }

  return (
    <myContext.Provider>
        {children}
    </myContext.Provider>
  )
}

export default Context
