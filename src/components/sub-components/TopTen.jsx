import Card from "./Card";


function TopTen() {
    // const options = {method: 'GET', headers: {accept: 'application/json'}};
    const getTopMovies = () => {
        fetch(`https://api.themoviedb.org/3/account/null/rated/movies?api_key=cf9a9bad102197a1ddd80162feedb935&language=en-US&page=1`   )
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    getTopMovies()

    return ( 
        <>
        <div className="top-ten-wrapper">
            
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </>
     );
}

export default TopTen;