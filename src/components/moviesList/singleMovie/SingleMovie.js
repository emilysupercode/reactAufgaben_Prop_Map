function Movie(props) {
    return (
        <div className="singleMovieDiv">
            <p className="movieTitle">{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <ul className="genreList">
                {props.genre.map((singleGenre, index) => {
                    return <li key={index}>{singleGenre}</li>
                })}
            </ul>
        </div>
    )
}

export default Movie;