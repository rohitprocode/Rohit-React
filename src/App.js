// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter'
import Student from './components/Student';
import Function from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet'
import NameList from './components/List';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import styles from './appStyles.module.css'
import Form from './components/Form';
import ConstructorinMounting from './components/ConstructorinMounting';
import Updating_LifeCycle from './components/Updating_LifeCycle'
import FragmentsDemo from './components/FragmentsDemo';
import Table from './components/Table';
import PyorComponent from './components/PureComponent';
import MemoComponents from './components/MemoComponents';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
function App() {
  return (
    <div className="App">
      <FRParentInput/>
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <MemoComponents/> */}
      {/* <PyorComponent/> */}
      {/* <Table /> */}
      {/* <FragmentsDemo /> */}
      {/* <Updating_LifeCycle/> */}
      {/* <h1>Education</h1> */}
      {/* <ConstructorinMounting surname={'Rathore'} /> */}
      {/* <Form /> */}
      {/* <h1 className={styles.error}>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={false} /> */}
      {/* <NameList/> */}
      {/* <UserGreet/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <Function/> */}
      {/* <ClassClick/> */}
      {/* <Student roll="101" /> */}
      {/* <Counter count={5} /> */}
      {/* <Greet name="Mohit" heroName="Batman">
      <p>This is Children Prop</p>
     </Greet>
     <Greet name="Akshay" heroName="Superman">
  <button>Action</button></Greet> */}
      {/* <Greet name="Hitesh" heroName="Wonder Woman"></Greet> */}
      {/* <Welcome name="Mohit" heroName="Batman" />  */}
      {/* <Welcome name="Akshay" heroName="Superman" />
     <Welcome name="Hitesh" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;
