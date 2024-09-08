import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const LightTheme = () => {
    setThemeMode("light")
  }
  const DarkTheme = () => {
    setThemeMode("dark")
  }

// actual change of the theme
useEffect(() => {
  const mode = document.querySelector("html")
  mode.classList.remove("light","dark")
  mode.classList.add(themeMode)
}, [themeMode])


  return (
    
    <ThemeProvider value={{themeMode, DarkTheme, LightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
               <Card/>
          </div>
        </div>                    
    </div>
    </ThemeProvider>

    

  )
}

export default App
