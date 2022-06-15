import {combineReducers,createStore} from "redux"
import { userReduser} from "./usersAndPosts/UeserAndPostRedux"


let store=combineReducers({
  user:userReduser,
 
})  

export const useStore=createStore(store);