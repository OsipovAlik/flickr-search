import React, { useEffect, useState } from 'react';
import style from "../Main/main.module.css"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import getPhotoThunk from '../../redux/Action/getPhoto.action';

const Main = () => {

   const [drag ,setDrag] = useState(false)

   const photos = useSelector(state => state.photosReducer.photos)
   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(getPhotoThunk())
      
   },[dispatch])

      const url = photos.map((value,index)=> photos[index].map(({id,farm,server,secret})=>{
         return {photo: 'http://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'}
      }));
  
      const s = url[0]



      const dragStartHandler =(e) =>{
         e.preventDefault();
         setDrag(true)
      }
      const dragLeaveHandler = (e) =>{
         e.preventDefault();
         e.stopPropagation();
         setDrag(false)
      }

      const onDropHandler =(e,photo) =>{
         e.preventDefault();
         let files = [...e.dataTransfer.files]
         
         setDrag(false)
         console.log(files);
      } 

     
      
      
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
                     onDrop={(e) =>{onDropHandler(e,photo)}}
                     />
                  )
                }
               )
            }
         </div>
         
         <div className={style.basketsSection}>
              { drag
               ? <div className={style.basket1}
               onDragStart={(e) =>  dragStartHandler(e)}
               onDragOver={(e) =>  dragStartHandler(e) }
               onDragLeave={(e) =>  dragLeaveHandler(e)}
               onDrop={(e) => onDropHandler(e)}

               > 
               ON ADD</div>
               : <div 
                  onDragStart={(e) =>  dragStartHandler(e)}
                  onDragOver={(e) =>  dragLeaveHandler(e) }
                  onDragLeave={(e) =>  dragStartHandler(e)}
                 
                  className={style.basketTrue}
               >NO</div>
             }

 <div className={style.basket2}>sss
                    </div>
         </div>
      </div>
   );
};

export default Main;