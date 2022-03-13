import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Header() {
  const [host, setHost] = useState(false);


  return (
    <div className='header'>
      <Link to='/'>
        <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
        />
      </Link>

        <div className='header__center'> 
          <input type="text" placeholder='Start your search' />
          <SearchIcon className='search-icon' />  
        </div>
        
        <div className='header__right'>
          <Button
            onClick={() => setHost(!host)}
          > { host ? "Go to Explore Nearby" : "Become a host" }
          </Button>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>

    </div>
  )
}

export default Header