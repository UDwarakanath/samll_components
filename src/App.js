import CustomModal from "./Modal/CustomModal"
import ModalContent from "./Modal/ModalContent"
import Accordian from "./Accordian/Accordian"
import "./App.css"

const App = () => {
  const modal_content = <ModalContent/>
  const consoleFunc = ()=>{
    console.log("callback works perfectly")
  }
  return (
    <>
    <CustomModal content={modal_content} buttonSubmitText="update" cb={consoleFunc}/>
    <Accordian/>
    </>
  )
}

export default App