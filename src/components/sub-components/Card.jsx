import poster from '../../assets/images/Poster1.png'
const Card = () => {

    return ( 
        <>
        <div className="movie-card" data-testid="movie-card">
            <img src={poster} alt="" className="poster" data-testid="movie-poster"/>
            <h3 className="movie-title" 
            data-testid="movie-title">
                Dune
            </h3>
            <p className="release-date" 
            data-testid="movie-release-date">2018</p>
            <p className="genre">sci-fi, thriller, action</p>
        </div>
        </>
     );
}

export default Card;