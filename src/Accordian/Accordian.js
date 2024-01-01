import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [show, setShow] = useState(null)
  const [multiSelection, setMutiSelection] = useState([])
  const [enableMultiSelection, setEnableMultiselection] = useState(false)

  const handleSingleSelection = (id) =>{setShow(show === id ? null : id)}

  const handleMultiSelection = (id) =>{
    let copyMulti = [...multiSelection]
    const findIndex = multiSelection.indexOf(id) === -1
    console.log(findIndex,id,multiSelection.indexOf(id))
    if(findIndex){
      copyMulti.push(id)
    }else{
      copyMulti.splice(findIndex-1,1)
    }

    setMutiSelection(copyMulti)
  }
  

  const accordian = data?.map(item =>{
    const {id,title,body} = item
    return <div key={id}>
      <h3 onClick={
        enableMultiSelection 
        ? () => handleMultiSelection(id)
        : () => handleSingleSelection(id)

      }>{title}</h3>
      {(enableMultiSelection ? !(multiSelection.indexOf(id) === -1) : show === id) && <p>{body}</p>}
    </div>}
  )
  return <>
    <button onClick={() => {
      setShow(null)
      setEnableMultiselection(!enableMultiSelection)}}>Enable Multi Selection</button>
    <div>{accordian}</div>
  </>
}


export default Accordian