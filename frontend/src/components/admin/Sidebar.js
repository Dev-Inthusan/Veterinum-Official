import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function Sidebar () {

    const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/admin/dashboard"><i className="fa fa-dashboard"></i> Dashboard</Link>
                </li>
        
                <li>
                    <NavDropdown title={
                        <i className='fas fa-user-md'> Veterinarian</i>
                    }>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products')} > <i className='fa fa-list'> All</i></NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products/create')} > <i className='fa fa-user-plus'> Create </i></NavDropdown.Item>
                    </NavDropdown>
                </li>

                <li>
                    <Link to="/admin/orders"><i className="fa fa-book"></i> Booking</Link>
                </li>

                <li>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                </li>

                <li>
                    <Link to="/admin/reviews"><i className="fa fa-comments"></i> Reviews</Link>
                </li>
        
            </ul>
            </nav>
        </div>
    )
}