import React, { Component } from "react";
import Fruit  from "./FruitsClass";
import FruitFunctional from './FruitsFunctional'
import { connect } from "react-redux";
const App = () => {
 
  return (
    <div>
    <Fruit/>
    <FruitFunctional/>
    </div>
  );
};


const mapStateToProps = (state) => {
  return { ...state.data };
};

export default connect(mapStateToProps)(App)