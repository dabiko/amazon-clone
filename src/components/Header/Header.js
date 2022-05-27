import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../../firebase';


function Header ()  {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className="header">
        <Link to='/'>
        <img className="amazon__logo" 
            src="../../images/Amazon-symbole.png" 
            alt="Logo here" /> 
        </Link>
       
              

        <div className="amazon__search">
            <input className="amazon__searchInput" 
                   type="text" 
            />
            <SearchIcon className="search__icon" />
        </div>
        
        <div className="amazon__nav">
            <Link to={!user && '/login'}>
                <div  onClick={handleAuthentication} className="amazon__option">
                    <span className="opntion__lineOne">
                        Hello Guest
                    </span>
                    <span className="opntion__lineTwo">          
                          {user ? user.email : 'Sign In'} 
                    </span>
                </div>
             </Link>
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
             <Link to='/checkout'>
                <div className="amazon__basket">
                        <ShoppingBasketIcon />
                        <span className="opntion__lineTwo cartCount">
                            {basket?.length}
                        </span>
                </div>
             </Link>          
        </div>
    </div>
  );
}

export default Header
