import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/scss/styles.css';
import SignUpForm from "./components/SignUpForm";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App h-100">
      <Navbar bg="dark">
        <div className="container-fluid h-100">
        <Navbar.Brand href="/">
            <img
              alt=""
              src="https://ewn-bd.com/images/site-navigation/logo.svg"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </div>
      </Navbar>
      <div className="container-fluid custom-h-100">
        <Container className="h-100">
          <BrowserRouter>
            <Routes>
              {/* Login component */}
              <Route path="/"  element={<Login />} /> 
              {/* Signup component */}
              <Route path="/sign-up" element={<SignUp />} />
              {/* Signup component */}
              <Route path="/sign-up-form:type" element={<SignUpForm />} />
            </Routes>
          </BrowserRouter>
           
        </Container>
      </div>
    </div>
  );
}

export default App;
