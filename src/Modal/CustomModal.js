import { useState } from "react"
const CustomModal = ({content,buttonSubmitText,cb}) => {
  const [show ,setShow] = useState(false)

  const handleSubmit = () => {
    setShow(false)
    cb()
  }
  return(
   <>
   <button onClick={()=>setShow(true)}>Show Modal</button>
   {show && <div className="modal_background" onClick={()=>setShow(false)}>
    <div className="modal_container" onClick={(e)=>e.stopPropagation()}>
      {/* you can send html elements as props directly using dangerouslySetInnerHTML */}
    {/* <div dangerouslySetInnerHTML={{__html:content}}>
    </div> */}
   <div>{content}</div>
      {buttonSubmitText && <button className="button_submit" onClick={handleSubmit}>{buttonSubmitText}</button>}
    </div>
  </div>}
   </>
  )
  


}

export default CustomModal