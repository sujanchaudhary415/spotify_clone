import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './../../DataLayer';

const Header = () => {
    const [{user},dispatch]=useDataLayerValue();
  return (
    <div className='header'>
        <div className="header__left">
            <SearchIcon/>
            <input type="text" placeholder='Search for Artists, Songs'/>
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt="SKC"/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header