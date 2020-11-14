import React from "react";
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://user-images.githubusercontent.com/31029088/99141402-66fcff00-268e-11eb-9617-995794134a95.png",
    rating: 5
  },
  {
    id: 2, 
    name: "ramen",
    image: "https://user-images.githubusercontent.com/31029088/99141415-81cf7380-268e-11eb-84cb-5ccc0a9fd75a.jpeg",
    rating: 4.3
  },
  {
    id: 3,
    name: "salad",
    image: "https://user-images.githubusercontent.com/31029088/99141424-8f84f900-268e-11eb-89b6-6010b70574ad.png",
    rating: 3.6
  },
  {
    id: 4,
    name: "chicken",
    image: "https://user-images.githubusercontent.com/31029088/99141438-a9264080-268e-11eb-955c-d950d6ab62e6.jpg",
    rating: 4.7
  },
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


function renderFood(food) {
  return <Food name={food.name} picture={food.image} />
  // map은 여기서 뭐가 돌아오든 array로 돌려준다!
}

function App() {
  return (
      <div>
        {foodILike.map(food => 
          <Food 
          key={food.id} 
          name={food.name} 
          picture={food.image} 
          rating={food.rating} />
        )}
      </div>
  )
}

export default App;
