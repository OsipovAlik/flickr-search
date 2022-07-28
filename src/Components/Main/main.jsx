import React, { useEffect } from 'react';
import style from "../Main/main.module.css"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import getPhotoThunk from '../../redux/Action/getPhoto.action';

const Main = () => {

   const photos = useSelector(state => state.photosReducer.photos)
   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(getPhotoThunk())
      
   },[])

      const url = photos.map((value,index)=> photos[index].map(({id,farm,server,secret})=>{
         return {photo: 'http://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'}
      }));
  
      const s = url[0]

      console.log(s);
   return (
      <div>
         <div className={style.photoSection}>
            {
                  s?.map(({photo}) =>{
                  return(
                     <img 
                     src={photo}
                     alt="img"
                     className={style.img}
                     draggable={true}

                     />
                  )
                }
               )
            }
         </div>
         <div className={style.basketsSection}>
            <div className={style.basket1}></div>
            <div className={style.basket2}></div>
         </div>
      </div>
   );
};

export default Main;