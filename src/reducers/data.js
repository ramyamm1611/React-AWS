import { name } from "../actions/data";

const initialState = {
    name:"name1" ,
};

function dataReducer(state = initialState, actions) {
  switch (actions.type) {
    case name:
      return { ...state, name: actions.name };
    default:
      return state;
  }
}

export default dataReducer;
