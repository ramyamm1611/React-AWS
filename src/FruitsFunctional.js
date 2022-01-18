import React ,{useState} from "react";
import FruitList from "./FruitList";

const FruitsFunctional = (props) => {

    const[FruitsList,setFruitsList] = useState(["Apple","Orange","Banana"])
    const[count,setcount] = useState(1)

   const increment = () =>{
setcount(count+1)
    }
    return(
        <div>
            <FruitList fruitprops={FruitsList}/>
            <div>{count}</div>
               <button onClick={increment}>Count++</button>
        </div>
    )
}

export default FruitsFunctional