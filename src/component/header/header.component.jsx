import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ReactComponent as Logo } from './crown.svg';
import './header.styles.scss';

import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) =>

  (
    <div className="header">
      <Link className='logo-container' to ='/'>
        <Logo className='logo' />
      </Link>

      <div className='options' >
          <Link className='option' to='/shop'>SHOP</Link>
          {/* <Link className='option' to='/shop'>CONTACT</Link> */}
          {
            currentUser ?
            (<div className='option' onClick={() => { alert("Successfully Sign Out")
              auth.signOut()
              return window.location.reload()
            }}>SIGN OUT</div>)
            :
            (<Link className='option' to='/signin'>SIGN IN</Link>)
          }

          <CartIcon />
      </div>
      {
        hidden ? null :
        <CartDropdown />
      }
    </div>
  )

//before cart hidden
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
  currentUser, hidden
});

export default withRouter(connect(mapStateToProps)(Header));