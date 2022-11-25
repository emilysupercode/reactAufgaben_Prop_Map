import Movie from "./singleMovie/SingleMovie";

function MoviesList(props) {
    return (
        < div className="movieDiv" >
            {
                props.movies.map((singleMovie, index) => {
                    return <Movie key={index} title={singleMovie.title} year={singleMovie.year} director={singleMovie.director} duration={singleMovie.duration} genre={singleMovie.genre} rate={singleMovie.rate} />
                })
            }
        </div >
    )
}

export default MoviesList;