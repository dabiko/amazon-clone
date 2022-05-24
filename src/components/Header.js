import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const Header = () => {
  return (
    <div className="header">
        <img  className="amazon_logo" 
        src="../../images/Amazon-symbole.png" 
        alt="Logo here" />

        <dev className="amazon_search">
            <input className="amazon_searchInput" 
                   type="text" 
            />
            <SearchIcon className="search_icon" />
        </dev>
        
        <div className="amazon_nav">
             <div className="amazon_option">
                 <span className="opntion_lineOne">
                     Hello Guest
                 </span>
                 <span className="opntion_lineTwo">
                     Sign In
                 </span>
             </div>
             <div className="amazon_option">
                 <span className="opntion_lineOne">
                     Returns
                 </span>
                 <span className="opntion_lineTwo">
                     & Orders
                 </span>
             </div>
             <div className="amazon_option">
                 <span className="opntion_lineOne">
                     You
                 </span>
                 <span className="opntion_lineTwo">
                     Prime
                 </span>
             </div>  

             <div className="amazon_basket">
                 <ShoppingBasketIcon />
                 <span className="opntion_lineTwo cartCount">0</span>
             </div>            
        </div>
    </div>
  )
}

export default Header
