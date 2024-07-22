import { createStore } from "redux"
import Rootreducer from "./reducer/Index"

const store = createStore(Rootreducer);
export default store;