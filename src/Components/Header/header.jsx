import React from 'react';
import style from "../Header/header.module.css"
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

   console.log(5);
   return (
      <div>
         <div className={style.header}>
            <div className={style.searchSection}>
               <input type="text " className={style.search}  />
               <SearchIcon  sx={{ fontSize: 27}} style={{cursor:"pointer"}}/>
            </div>
         </div>
         
      </div>
   );
};

export default Header;