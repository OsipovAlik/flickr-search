import axios from "axios"

export const GET_PHOTO = "GET_PHOTO"

const tag = " cat"



const getPhotoThunk = () => {

   return async dispatch => {
      const response = await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2c59d6dade74d2b793c90199560c7f6a&tags=cats+dogs&format=json&nojsoncallback=1&api_sig=b455122950eb4a52881868f271e97fce`)
      dispatch({
         type: GET_PHOTO,
         payload:response.data.photos.photo
      })
      
   }
   
}
export default getPhotoThunk;  