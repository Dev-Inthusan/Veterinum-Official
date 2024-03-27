import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import { Dropdown, Image} from 'react-bootstrap';   //DropdownButton,
import { logout } from '../../actions/userActions';


export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
      <>
    <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img className="ml-5" width="170px" alt='Veterinum Logo' src="/images/logo.png" />
              
            </Link>
            </div>
        </div>
  
        {/* <div className="col-12 col-md-6 mt-2 mt-md-0">
           <Search/>
        </div> */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
                <ul className="navbars " style={{display:"flex"}}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
  
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
                    </figure>
                    <span className='pink-text'>{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark' >Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Bookings</Dropdown.Item>
                      <Dropdown.Item onClick={logoutHandler} className='text-danger' style={{fontWeight: 'bold'}}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn text-white" id="login_btn" style={{fontWeight: 'bold'}}>Login</Link>
          }
          <Link to="/cart"><span id="cart" className="ml-3 pink-text" style={{fontWeight: 'bold'}}>Appointment</span></Link>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </div>  
    </nav>
    </>

    )
}