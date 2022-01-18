import react from "react";
import React ,{Component} from "react";
import FruitList from "./FruitList";

class Fruit extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            FruitsList : ["Apple","Orange","Banana"],
            count : 1,
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <FruitList fruitprops = {this.state.FruitsList}/>
               {/* {this.state.FruitsList.map((value) =>{
                   return(
                       <li>{value}</li>
                   )
               })} */}
               <div>{this.state.count}</div>
               <button onClick={this.increment}>Count++</button>
            </div>
        )
    }
}

export default Fruit