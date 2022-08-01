import React, { useEffect, useState } from 'react';
import style from "../Main/main.module.css"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import getPhotoThunk from '../../redux/Action/getPhoto.action';

const Main = () => {

   const [catsImg, setCatsImg] = useState([])
   const [showCatsImg, setCatsShowImg] = useState(false)
   const [dogsImg, setDogsImg] = useState([])
   const [showDogsImg, setShowDogsImg] = useState(false)

   const photos = useSelector(state => state.photosReducer.photos)
   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(getPhotoThunk())

   }, [dispatch])

   const url = photos.map((value, index) => photos[index].map(({ id, farm, server, secret }) => {
      return { photo: 'http://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg' }
   }));

   const s = url[0]


   function allowDrop(e) {
      e.preventDefault();
   }

   function drags(e) {
      e.dataTransfer.setData("text", e.target.id);
   }



   function drop(e) {
      e.preventDefault();
      var cat = e.dataTransfer.getData('text')
      setCatsImg([...catsImg, cat])
   }


   function allowDrop2(e) {
      e.preventDefault();
   }
   function drop2(e) {
      e.preventDefault();
      var dog = e.dataTransfer.getData('text')
      setDogsImg([...dogsImg, dog])
   }


   return (
      <div>
         <div className={style.photoSection}>
            {
               s?.map(({ photo }) => {
                  return (
                     <img
                        src={photo}
                        alt="img"
                        className={style.img}
                        draggable={true}
                        onDragStart={(e) => { drags(e) }}
                     />
                  )
               }
               )
            }
         </div>

         <div className={style.basketsSection}>

            <div
               className={style.basket1}
               onDrop={(e) => { drop(e) }}
               onDragOver={(e) => { allowDrop(e) }}
               onClick={() => {
                  setCatsShowImg(!showCatsImg)
                  setShowDogsImg(false)
               }}
            >
               Cats
            </div>

            <div
               className={style.basket2}
               onDrop={(e) => { drop2(e) }}
               onDragOver={(e) => { allowDrop2(e) }}
               onClick={() => {
                  setShowDogsImg(!showDogsImg)
                  setCatsShowImg(false)
               }}
            >
               Dogs
            </div>

         </div>
         <div className={style.newImgSection}>
            {
               showCatsImg && <div className={style.catsImg}>
                  {
                     catsImg.map((img) => (
                        <img src={img} alt="catsImg" style={{ width: "120px", height: "120px", padding: '10px 20px' }} />
                     ))
                  }

               </div>
            }
            {
               showDogsImg && <div className={style.dogsImg }>
                  {
                     dogsImg.map((img) => (
                        <img src={img} alt="dogsImg" style={{ width: "120px", height: "120px", padding: '10px 20px' }}/>
                     ))
                  }
               </div>
            }
         </div>

      </div>
   );
};

export default Main;