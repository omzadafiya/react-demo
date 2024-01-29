import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from '../Student';



const PropsExample = ({test,parentTOChild}) => {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState("")
  const [inputVal, setInputVal] = useState("Test 1")


  useEffect(()=>{
    parentTOChild('787888989565')
  },[])

  return (
    <div className='App'>
      <h1>{test}</h1>
    </div>
  )
}



export default PropsExample;
