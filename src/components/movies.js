import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";


function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            // movie를 클릭하면 다음의 정보를 movie-detail로 이동하면서 같이 보내준다.
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movies_movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                    </ul>
                    {summary.length <= 150 ? 
                        <p className="movie_summary">{summary.slice(0, 150)}</p> :
                        <p className="movie_summary">{summary.slice(0, 150)}...</p> 
                    }
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;