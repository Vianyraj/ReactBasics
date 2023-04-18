// import React, { useRef } from 'react'
// import { useState, useEffect,createContext } from 'react'

// const AppContext = createcontext(null)
// const UseStateEffect = () => {

//  const [ increment, setIncrement ] = useState(0)
//  const [strin, setStrin] =useState("")
//  const inputRef = useRef(null);
//  let x,y,z;
//  x=1;
//  y=2;
 
// //  useEffect(()=> {console.log('componenet update',increment)})
//  useEffect(()=> { z=x+y;
//     console.log('componenet update',z)},[])
// const incrementfunc = () => {
//   setIncrement(increment + 1)
// }
// const entertext = (e) =>{
// console.log(e.target.vlaue,"check")
// setStrin(e.target.value)
// }
// const focushandler = ()=> {
  
//   // inputRef.current.focus();
//   inputRef.current.value="Sdfsd";
// }
//   return (
//     <div>
//       <button onClick = { incrementfunc} >increment</button>
//       <p>{increment}</p>
//       <button onClick = { () => setIncrement(increment - 1)} >decrement</button>
      
//       <input type='text' placeholder="enter text" onChange={entertext} ref={inputRef}></input>
//     <button type = "text" onClick= {focushandler} >Click</button>
//     {strin}
//     </div>
//   )
// }

// export default UseStateEffect
