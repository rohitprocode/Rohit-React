// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
     <Greet name="Mohit" heroName="Batman"/>
     <Greet name="Akshay" heroName="Superman"/> 
     <Greet name="Hitesh" heroName="Wonder Woman"/>
     <Welcome/>
    </div>
  );
}

export default App;
