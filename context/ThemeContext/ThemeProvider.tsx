import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'





export const ThemeProvider = ({children}:any) => {

    const [colorTheme,setColorTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={{
        colorTheme,setColorTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}
