import changeTheNumber from "./UpDown";
import { combineReducers } from "redux";
import changeNumber from "./DownUp";

const Rootreducer = combineReducers({
    changeTheNumber , 
    changeNumber
})
export default Rootreducer
