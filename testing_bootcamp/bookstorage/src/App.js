import '../src/styles/styles.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import MyBooks from "./components/MyBooks";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Books from "./components/books"
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />       
          <Route path="/book" element={<Books />} />   
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
