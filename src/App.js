import React from "react";

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://user-images.githubusercontent.com/31029088/99141402-66fcff00-268e-11eb-9617-995794134a95.png"
  },
  {
    id: 2, 
    name: "ramen",
    image: "https://user-images.githubusercontent.com/31029088/99141415-81cf7380-268e-11eb-84cb-5ccc0a9fd75a.jpeg"
  },
  {
    id: 3,
    name: "salad",
    image: "https://user-images.githubusercontent.com/31029088/99141424-8f84f900-268e-11eb-89b6-6010b70574ad.png"
  },
  {
    id: 4,
    name: "chicken",
    image: "https://user-images.githubusercontent.com/31029088/99141438-a9264080-268e-11eb-955c-d950d6ab62e6.jpg"
  },
];

function renderFood(food) {
  return <Food name={food.name} picture={food.image} />
  // map은 여기서 뭐가 돌아오든 array로 돌려준다!
}

function App() {
  return (
      <div>
        {foodILike.map(food => 
          <Food key={food.id} name={food.name} picture={food.image} />
        )}
      </div>
  )
}

export default App;
