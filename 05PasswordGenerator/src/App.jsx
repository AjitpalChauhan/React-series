import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numIn, setNumIn] = useState(false);
  const [charIn, setCharIn] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numIn) str += "1234567890"
    if(charIn) str +="!@#$%^&*"

    for(let i =1; i<= length; i++){
      let randomNum = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNum)
    }
    setPassword(pass)


  }, [length, numIn, charIn, setPassword])

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {passwordGenerator()}, [length, numIn, charIn, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto text-orange-500 bg-gray-500 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value= {password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className='px-3 py-1 bg-blue-900 outline-none text-white'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min ={8}
            max={50}
            value = {length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)} }
            />
            <label >Length: {length}</label>
          </div >
          <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numIn}
          id = "numberInput"
          onChange = {() => {setNumIn((prev) => !prev)}} />
          <label htmlFor="">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charIn}
          id = "characterInput"
          onChange = {() => {setCharIn((prev) => !prev)}} />
          <label htmlFor="">Character</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
