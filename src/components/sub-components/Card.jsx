import poster from '../../assets/images/Poster1.png'
const Card = (props) => {
    console.log(props.movie)
    return ( 
        <>
        <div className="movie-card" data-testid="movie-card">
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.movie.poster_path}`} alt="" className="poster" data-testid="movie-poster"/>
            <p className="release-date" 
            data-testid="movie-release-date">{props.movie.release_date}</p>
             <h3 className="movie-title" 
            data-testid="movie-title">
                {props.movie.title}
            </h3>
            <p className="genre">sci-fi, thriller, action</p>
        </div>
        </>
     );
}

export default Card;