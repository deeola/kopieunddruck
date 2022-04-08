import Home from "./components/Home/Home";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Binding from "./components/Services/Binding";
import Printing from "./components/Services/Printing";
import Cad from "./components/Services/Cad";
import Designs from "./components/Services/Designs";
import Posters from "./components/Services/Posters";
import Scan from "./components/Services/Scan";
import Textiles from "./components/Services/Textiles";
import Laminate from "./components/Services/Laminate";
import Photocopy from "./components/Services/Photocopy";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/binding" element={<Binding />} />
          <Route exact path="/printing" element={<Printing />} />
          <Route exact path="/cad-reprography" element={<Cad />} />
          <Route exact path="/posters" element={<Posters />} />
          <Route exact path="/scanning" element={<Scan />} />
          <Route exact path="/laminating" element={<Laminate />} />
          <Route exact path="/photocopy" element={<Photocopy />} />
          <Route exact path="/designs" element={<Designs />} />
          <Route exact path="/textiles" element={<Textiles />} />
          <Route exact path="/about-us" element={<About />} />
          
        </Routes>
      </div>
    </Router>
  );
}


export default App;
