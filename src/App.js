import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';
import PropsExample from './Component/PropsExample';



function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState("")
  const [inputVal, setInputVal] = useState("Test 1")


  const getData = (val) => {
    setData(val.target.value)
    setPrint("")
  }

  useEffect(() => {
    setTimeout(() => {
      setInputVal("Test 2")
    }, 10000)
  }, [])

  console.log('test3443')
  useEffect(()=>{
    
    console.log('test1231')
  },[])

  const parentTOChild = (checkTest) => {
    console.log('test',checkTest)
  }


  return (
    <div className='App'>
      {
        print ?
          <h1>{data}</h1>
          : null
      }
      <input type='text' placeholder='text' value={inputVal} onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
      <PropsExample test={'testjjjhhk'} parentTOChild={parentTOChild}/>
    </div>
  )
}
///////////////////////// Propes ////////////////////////
// function App() {
//   const [name, setName] = useState("OM ZAFAFIYA")
//   return (
//     <div className='App'>
//       <h1>Props in React</h1>
//       <Student name={name} />
//       <button onClick={() => { setName("OM") }}>updateName</button>
//       {/* <Student name={"Pallavi"} email='pallavi@gmail.com'/>
//       <Student name={"Asmitaben"} email='asmitaben@gmail.com'/> */}

//     </div>
//   )
// }


////////////////////////// State ///////////////////////////
// function App() {
//   const [data, setData] = useState(0)
//   function updateData() {
//     setData(data + 1)
//   }
//   return (
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }


export default App;
