import { GET_PHOTO } from "../Action/getPhoto.action"

const initialState = {
   photos:[

   ]
}
const photosReducer = (state = initialState, action) => {

   switch(action.type){
      case GET_PHOTO: 
      return{
         ...state,
         photos:[...state.photos, action.payload]
      }
      default: return state
   }
}
export default photosReducer