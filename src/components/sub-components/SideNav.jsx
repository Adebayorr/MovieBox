import Logo from '../../assets/icons/MovieBox-Logo.png'
import {GoHome} from 'react-icons/go'
import {FiVideo} from 'react-icons/fi'
import {PiTelevisionSimpleLight} from 'react-icons/pi'
import {LiaCalendarSolid} from 'react-icons/lia'
import {IoLogOutOutline} from 'react-icons/io5'

const SideNav = () => {
    const color = {
        color: '#333'
    }
    return ( 
        <>
        <div className="side-nav">
            <div className="logo-wrapper">
                <img src={Logo} alt="MovieBox Logo" width='50px' />
                <h2 className="logo-title" style={color}>MovieBox</h2>
            </div>
            <nav className="side-nav-wrapper">
                <a href="/" className="side-link">
                   <span className="wrap-link">
                    <GoHome />
                    <h3>Home</h3>
                   </span>
                </a>
                <a href="/" className="side-link">
                <span className="wrap-link">
                   <FiVideo />
                   <h3>Movies</h3>
                </span>
                   
                </a>
                <a href="/" className="side-link">
                <span className="wrap-link">
                   <PiTelevisionSimpleLight />
                   <h3>TV Series</h3>
                </span>
                    
                   
                </a>
                <a href="/" className="side-link">
                <span className="wrap-link">
                    <LiaCalendarSolid />
                    <h3>Upcoming</h3>
                </span>
                   
                </a>
            </nav>
            <div className="nav-more">
                <h3 className="more-title">Play more quizzes and earn more tickets</h3>
                <p className="more-details">50% more are playing now</p>
                <a href="/">Start Playing</a>
            </div>
            <a href='/' className="logout">
                <IoLogOutOutline className='log-out'/>
                Log out
            </a>
        </div>
        </>
     );
}
 
export default SideNav;