// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
// import About from "./pages/About";
// import User from "./pages/User";



function App() {
    

 

    return (

        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
          {/* <Router>
          <Routes>
  
          <Route path="*" element={<Home />} />
          </Routes>
          </Router> 
          <Link to="*">Go Home</Link> */}
          <Home />
          
            
    </div>
  );
}

export default App;
