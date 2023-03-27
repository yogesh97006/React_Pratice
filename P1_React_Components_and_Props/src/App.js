import './App.css';
import ClassCom from './ClassCom';
import ClassWithProps from './ClassWithProps';
import ConditionalComp from './ConditionalComp';
import Func from './Func';
import FuncWithArrow from './FuncWithArrow';

function App() {
  return (
    <div className="App">
      <Func />
      <ClassCom />
      <FuncWithArrow />
      <ClassWithProps button='Login' />
      <ClassWithProps button='SignIn' />

      <ClassWithProps button='LogOut' />
      <ClassWithProps button='SignOut' />

      <ConditionalComp Status="OK"/>
      <ConditionalComp Status="Wait"/>
      <ConditionalComp Status="No"/>
      <ConditionalComp />



    </div>
  );
}

export default App;
