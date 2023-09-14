import logo from '../../assets/icons/MovieBox-Logo.png'
import SearchBar from './SearchBar'
// import HiOutlineMenuAlt4 from 'react-icons/hi'
function Logo () {

    return (
        <div className="logo-wrapper">
            <img  width="50px" src={logo} alt="" />
            <p className='logo-title'>MovieBox</p>
        </div>
    )
}

function SignAndMenu () {

    return (
        <>
        <div className="signup-menu">
            <a href="/">Sign up</a>    {/**Update this link with react router */}
            {/* <img src={HiOutlineMenuAlt4} alt="" /> */}
        </div>
        </>
    )
}

function Nav () {


    return (
        <>
        <nav className="nav">
        <Logo />
        <SearchBar />
        <SignAndMenu />
        </nav>
        </>
    )
}

export default Nav