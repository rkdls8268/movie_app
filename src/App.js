import React from "react";

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return <div> Hello! 
          <Food fav="Kimchi" />
          <Food fav="Ramen" />
          <Food fav="salad" />
          <Food fav="chicken" />
        </div>;
}

export default App;
