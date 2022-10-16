
import { useEffect, useState } from 'react';
import './App.css';
import video from "./food.mp4";
import MyRecepiesComponent from './MyRecepiesComponent';

function App() {

  const MY_ID="4a18487c";
  const MY_KEY="b7b0f402f65fd3087b1054fc90fec2d0";

  const[mySearch, setMySearch] = useState("");
  const [myRecepies, setMyRecepies] = useState([]);
  const [wordSubmit, setWordSubmit] = useState('avocado')

  const finalSearch = (e) =>{
    e.preventDefault();
    setWordSubmit(mySearch);
  }

  useEffect(() => {
  getRecepies();
  },[wordSubmit])
  
    const getRecepies = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecepies(data.hits)
    }
    const myRecipeSearch = (e) =>(
      setMySearch(e.target.value)
    )
  

  return (
    <div className='App'>

      <div className='container'>
      <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
      </video>
      <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
        </form>
        </div>

        <div className='container'>
        <button>
          <img src="https://img.icons8.com/tapes/344/experimental-search-tapes.png"alt="search" width="35px" className='icon'/>
        </button>
        </div>

       <div  className='cont'>
      {myRecepies.map((element, index) =>(
        <MyRecepiesComponent key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories = {element.recipe.calories} 
        ingredients = {element.recipe.ingredientLines}/>
      ))}
      </div>
    </div>
  );
}

export default App;
