import { useEffect, useState } from "react";
import Card from "./Card";



function TopTen() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=cf9a9bad102197a1ddd80162feedb935')
        .then(response => {
            return response.json()      
        })
        .then(json => setMovies(json.results.slice(0, 10)))
        .catch(err => console.error(err));
    }, []) 
    console.log(movies)
    return ( 
        <>
        <h1 className="top-ten-title">Top Ten Movies</h1>
        <div className="top-ten-wrapper">
            
            {movies.map(movie => <Card movie={movie} />
                )}
        </div>
        </>
     );
}

export default TopTen;