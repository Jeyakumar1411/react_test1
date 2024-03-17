import FunProps2 from './FunProps2'

const FunProps = () => {

    

    function mathCal(name = "there"){
      console.log("hi",name)
    }

  return (
    <div>
        <FunProps2 
        mathCal={mathCal}
        />

        
    </div>
  )
}

export default FunProps