"use client"
import React from 'react'
import '../app/globals.css'
import {CiDark,CiLight} from 'react-icons/ci'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme,theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  const themeMode = theme === "system" ? systemTheme : theme

  return (
    <div>
      {
        mounted && (
          themeMode === "dark" ?
          <CiLight onClick={()=> setTheme('light')} className='cursor-pointer' size={25}/> :
          <CiDark onClick={()=> setTheme('dark')} className='cursor-pointer' size={25}/>
        )
      }
    </div>
  )
}

export default ThemeComp