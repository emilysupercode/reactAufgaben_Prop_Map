import './App.css';
import ToDoList from "./components/todoList/Todo";
import movies from "./components/data/moviedata";
import Product from "./components/products/Products";
import products from "./components/data/productdata";
import MoviesList from "./components/moviesList/MoviesList";

let toDo = [
  { name: "finish day 46 We Are Glint project" },
  { name: "finish Cluedo project" },
  { name: "finish ex 3_1 from events1-3" },
  { name: "finish ex 3_15 from classes & constructors" },
  { name: "update weather app to use match(/\d\d:\d\d/" }
];

function App() {
  return (
    < div className="App" >
      <h1>React Aufgaben</h1>
      <h2>My To-Do-List</h2>
      <ul className='todoList'>
        {toDo.map((singleToDo, index) => {
          return <ToDoList key={index} name={singleToDo.name} />
        })}
      </ul>
      <h2>Product Cards</h2>
      <section className='allProductsSection'>
        {products.map((singleProduct, index) => {
          return <Product key={index} image={singleProduct.image} name={singleProduct.name} price={singleProduct.price} />
        })}
      </section>
      <h2>250 Movie Cards</h2>
      <MoviesList movies={movies} />
    </div >
  );
};

export default App;
