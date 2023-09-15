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
                   <GoHome />
                   <h3>Home</h3>
                </a>
                <a href="/" className="side-link">
                   <FiVideo />
                   <h3>Movies</h3>
                </a>
                <a href="/" className="side-link">
                   <PiTelevisionSimpleLight />
                   <h3>TV Series</h3>
                </a>
                <a href="/" className="side-link">
                   <LiaCalendarSolid />
                   <h3>Upcoming</h3>
                </a>
            </nav>
            <div className="nav-more">
                <h3 className="more-title">Play more quizzes and earn more tickets</h3>
                <p className="more-details">50% more are playing now</p>
                <a href="/">Start Playing</a>
            </div>
            <a href='/' className="logout">
                <IoLogOutOutline className='log-out'/>
                LOG OUT
            </a>
        </div>
        </>
     );
}
 
export default SideNav;