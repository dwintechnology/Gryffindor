
import './App.css';
import Button from './componets/button/sugestionButton';

function App() {

  const handleClick = () => {
    console.log("on click");
  }
  return (
    <div className="App">
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
