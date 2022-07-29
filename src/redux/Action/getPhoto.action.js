import axios from "axios"

export const GET_PHOTO = "GET_PHOTO"




const getPhotoThunk = () => {

   return async dispatch => {
      const response = await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=668354367920541d27cf64a2f11368c9&tags=cats+dogs&per_page=5&format=json&nojsoncallback=1&api_sig=64eb8c2445bdd93e8e9451ec57ab97ac`)
      dispatch({
         type: GET_PHOTO,
         payload:response.data.photos.photo
      })
      
   }
   
}
export default getPhotoThunk;  