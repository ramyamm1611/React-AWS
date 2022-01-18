import React ,{Component} from "react";

import { connect } from "react-redux";
class FruitList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.name)
        return(
            <div>
{this.props.fruitprops.map((value) =>{
                   return(
                       <li>{value}</li>
                   )
               })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.data };
  };
  
  export default connect(mapStateToProps)(FruitList)