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
import Delivery from "./components/Services/Delivery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import WorkSamples from "./components/Work/WorkSamples";
import DataProtect from "./components/Shared/Footer/DataProtect";
import Disclaimer from "./components/Shared/Footer/Disclaimer";
import Impressum from "./components/Shared/Footer/Impressum";
import Datanau from "./components/Datanauf/Datanau";
import Students from "./components/Services/Students";

function App() {
  return (
    <Router basename={window.location.pathname || ""}>
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
          <Route exact path="/kontact" element={<Contact />} />
          <Route exact path="/worksamples" element={<WorkSamples />} />
          <Route exact path="/dataprotection" element={<DataProtect />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/impressum" element={<Impressum />} />
          <Route exact path="/datenaufbereitung" element={<Datanau />} />
          <Route exact path="/delivery" element={<Delivery />} />
          <Route exact path="/students" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
