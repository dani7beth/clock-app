import logo from './logo.svg';
import './App.css';
import { Button, Container, Header } from 'semantic-ui-react';
import Clock from './classes/Clock';
import {useState} from 'react';

function App() {
  const [showClock, setShowClock] = useState(false);
  return (
    <Container >
      <Header as="h1">LifeCycle</Header>
      <Button onClick={() => setShowClock(!showClock)}> {showClock ? 'Hide' : "Show"}</Button>
      {showClock && <Clock />}
    </Container>
  );
}

export default App;
