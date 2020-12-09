import logo from './logo.svg';
import './App.css';
import { Button, Container, Header } from 'semantic-ui-react';
import Data from './func/Data';
import {useState} from 'react';
import Clock from './classes/Clock';

function App() {
  const [showData, setShowData] = useState(false);
  const [showClock, setShowClock] = useState(false);
  return (
    <Container >
      <Header as="h1">LifeCycle</Header>
      <Button onClick={()=> setShowClock(!showClock)}>{showClock ? "hide" : "show" }</Button>
      {showClock && <Clock />}
      {showData && <Data />}
      <Button onClick={()=>setShowData(!showData)}>{showData ? "hide" : "Show"}</Button>
    </Container>
  );
}

export default App;
