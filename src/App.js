// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
     <Greet name="Mohit" heroName="Batman">
      <p>This is Children Prop</p>
     </Greet>
     <Greet name="Akshay" heroName="Superman">
      <button>Action</button></Greet> 
     <Greet name="Hitesh" heroName="Wonder Woman"></Greet>
     <Welcome/>
    </div>
  );
}

export default App;
