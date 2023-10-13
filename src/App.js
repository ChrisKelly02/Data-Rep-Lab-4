import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';


function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    {/* //Creation of Navbar */}
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* //Navbar */}
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* //Home */}
            <Nav.Link href="/">Home</Nav.Link>
            {/* //Create */}
            <Nav.Link href="create">Create</Nav.Link>
            {/* //Read */}
            <Nav.Link href="read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* //Code outputting to screen */}
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Routes>
        <Route path='/Home' element={<Content></Content>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path= '/Create' element={<Create></Create>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
