import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


function Header ()  {
    const [{ basket}, dispatch] = useStateValue();
  return (
    <div className="header">
        <Link to='/'>Home</Link>
        <img className="amazon__logo" 
            src="../../images/Amazon-symbole.png" 
            alt="Logo here" /> 
        
       
              

        <div className="amazon__search">
            <input className="amazon__searchInput" 
                   type="text" 
            />
            <SearchIcon className="search__icon" />
        </div>
        
        <div className="amazon__nav">
             <div className="amazon__option">
                 <span className="opntion__lineOne">
                     Hello Guest
                 </span>
                 <span className="opntion__lineTwo">
                     Sign In
                 </span>
             </div>
             <div className="amazon__option">
                 <span className="opntion__lineOne">
                     Returns
                 </span>
                 <span className="opntion__lineTwo">
                     & Orders
                 </span>
             </div>
             <div className="amazon__option">
                 <span className="opntion_lineOne">
                     You
                 </span>
                 <span className="opntion__lineTwo">
                     Prime
                 </span>
             </div>  
             <Link to='/checkout'>cc</Link>
                <div className="amazon__basket">
                        <ShoppingBasketIcon />
                        <span className="opntion__lineTwo cartCount">
                            {basket?.length}
                        </span>
                </div>
                         
        </div>
    </div>
  );
}

export default Header
