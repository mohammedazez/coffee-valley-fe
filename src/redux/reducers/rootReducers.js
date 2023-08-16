import userReducers from "./userReducers";
import beansReducer from "./beansReducers";

const rootReducers = {
  beans: beansReducer,
  user: userReducers,
};

export default rootReducers;
