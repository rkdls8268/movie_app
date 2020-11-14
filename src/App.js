import React from "react";

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://user-images.githubusercontent.com/31029088/99141402-66fcff00-268e-11eb-9617-995794134a95.png"
  },
  {
    name: "ramen",
    image: "https://user-images.githubusercontent.com/31029088/99141415-81cf7380-268e-11eb-84cb-5ccc0a9fd75a.jpeg"
  },
  {
    name: "salad",
    image: "https://user-images.githubusercontent.com/31029088/99141424-8f84f900-268e-11eb-89b6-6010b70574ad.png"
  },
  {
    name: "chicken",
    image: "https://user-images.githubusercontent.com/31029088/99141438-a9264080-268e-11eb-955c-d950d6ab62e6.jpg"
  },
];

function App() {
  return (
      <div>
        {foodILike.map(food => <Food name={food.name} picture={food.image}/>)}
      </div>
  )
}

export default App;
