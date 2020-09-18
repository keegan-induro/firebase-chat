import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Chat from './chat/chat.js';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  const [currentUser, setCurrentUser] = useState({ id: '1', name: 'Keegan' });

  const login = async () => {
    setCurrentUser({ id: '1', name: 'Keegan' });
  }

  const logout = async () => {
    setCurrentUser(undefined);
  }

  return (
    <div id="main">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Firebase Chat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              { !currentUser && (
                <Nav.Link onClick={login}>Login</Nav.Link>
              )}
              { currentUser && (
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="main-container">
        { currentUser && (
          <div>
            <Chat currentUser={currentUser} />
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
