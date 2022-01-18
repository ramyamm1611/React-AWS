import React, { Component } from "react";
import Fruit  from "./FruitsClass";
import FruitFunctional from './FruitsFunctional'
import { connect } from "react-redux";
import { withAuthenticator } from '@aws-amplify/ui-react'

const App = () => {
 
  return (
    <div>
    <Fruit/>
    <FruitFunctional/>
    {/* <AmplifySignOut /> */}
    </div>
  );
};


const mapStateToProps = (state) => {
  return { ...state.data };
};

export default  withAuthenticator(connect(mapStateToProps)(App))