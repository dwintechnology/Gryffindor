
import "./variables.scss";
import MovieContainer from "./pages/movieContainer/MovieContainer";
import imaga from './assets/img/Ellipse 5.svg';
import imaga1 from './assets/img/Mask Group (1).png';
import imaga2 from './assets/img/Mask Group (2).png';



function App() {

  return (
    <div className="App">

      
      <img className="ImgStyle2" src={imaga}  />
      <img className="ImgStyle" src={imaga1} />
      <img className="ImgStyle1" src={imaga2} />
      <>
      <MovieContainer/>
      </>


    </div>
    
  )
}
export default App;
