// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
     <Greet name="Mohit"/>
     <Greet name="Akshay"/> 
     <Greet name="Hitesh" />
     <Welcome/>
    </div>
  );
}

export default App;
