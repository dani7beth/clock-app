import logo from './logo.svg';
import './App.css';
import { Button, Container, Header } from 'semantic-ui-react';
import Data from './func/Data';
import {useState} from 'react';

function App() {
  const [showData, setShowData] = useState(false);
  return (
    <Container >
      <Header as="h1">LifeCycle</Header>
      {showData && <Data />}
      <Button onClick={()=>setShowData(!showData)}>{showData ? "hide" : "Show"}</Button>
    </Container>
  );
}

export default App;
