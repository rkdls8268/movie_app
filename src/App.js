import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true, // isLoading은 로딩되자마자 true
    movies: []
  };
  
  // async await 을 하는 것은 기본적으로 js에게 getMovies()가 조금 시간이 필요하고 우리는 그걸 기다려야 한다는 것을 명시한다. 
  getMovies = async() => {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  // 이론적으로 우리가 할 일은 componentDidMount에서 data를 fetch하는 것이다.
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "we are ready"}</div>
  }
}

export default App;