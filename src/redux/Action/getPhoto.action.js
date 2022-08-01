import axios from "axios"

export const GET_PHOTO = "GET_PHOTO"




const getPhotoThunk = () => {

   return async dispatch => {
      const response = await  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f4e2bb7a85421a405dbc2c40546bfd91&tags=dogs+cats&per_page=14&format=json&nojsoncallback=1&api_sig=6b9c22cec035afdd36760282e9a131bf`)
      dispatch({
         type: GET_PHOTO,
         payload:response.data.photos.photo
      })
      
   }
   
}
export default getPhotoThunk;  