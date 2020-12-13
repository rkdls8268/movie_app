import React from "react";
import axios from "axios";
import Movie from "../components/movies";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true, // isLoading은 로딩되자마자 true
    movies: []
  };
  
  // async await 을 하는 것은 기본적으로 js에게 getMovies()가 조금 시간이 필요하고 우리는 그걸 기다려야 한다는 것을 명시한다. 
  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }

  // 이론적으로 우리가 할 일은 componentDidMount에서 data를 fetch하는 것이다.
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">
            {isLoading ? (
              <div className="loader">
                <span className="loader_text">Loading...</span>
              </div> 
            ) : (
              <div className="movies">
                {movies.map(movie => (
                  <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}/>
                ))}
              </div>
            )}</section>
  }
}

export default Home;