// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter'
function App() {
  return (
    <div className="App">
      <Counter count={5} />
     {/* <Greet name="Mohit" heroName="Batman">
      <p>This is Children Prop</p>
     </Greet>
     <Greet name="Akshay" heroName="Superman">
      <button>Action</button></Greet> 
     <Greet name="Hitesh" heroName="Wonder Woman"></Greet>
     <Welcome name="Mohit" heroName="Batman" />
     <Welcome name="Akshay" heroName="Superman" />
     <Welcome name="Hitesh" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;
