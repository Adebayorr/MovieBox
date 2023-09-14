import Nav from "./Nav";
import play from '../../assets/icons/Play.png'

function OverLay () {

    return (
        <div className="hero-overlay">

        </div>
    )
}

function HeroContent () {

    return (
        <div className="hero-content">
            <h1 className="hero-title">
                John Wick 3:<br/>
                Parabellum
            </h1>
            <div className="raters">
                <img src="" alt="" className="imdb" />
                <img src="" alt="" className="rotten" />
            </div>
            <p className="hero-desc">
            {`John Wick is on the run after killing a member of the 
            international assassins' guild,
             and with a $14 million price tag on his head, he is the target
              of hit men and women everywhere.`}
            </p>    
            <a href="/" className="hero-cta"> {/**Update this link with react router */}
                <img src={play} alt="" className="hero-cta-icon" />
                {'watch trailer'.toUpperCase()}
            </a>
        </div>
    )
}

const Hero = () => {
    
    return (
        <>
            <div className="Hero">
                <OverLay />
                <Nav />
                <HeroContent />
            </div>
        </>
    )
}

export default Hero;