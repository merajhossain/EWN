import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App h-100">
      <div className="container h-100">
        <BrowserRouter>
          <Routes>
            {/* Login component */}
            <Route path="/"  element={<Login />} /> 
            {/* Signup component */}
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
