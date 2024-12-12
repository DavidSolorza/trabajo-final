
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/Layout";
import  Dashboard  from "./pages/Dashboard";
import Overview from "./pages/OverView";
import Calculator from "./pages/Calculator";
import CsvToJsonAndTableWithAdvancedFilters from "./components/table/CsvToJsonAndTableWithFilters";

function App() {
  return (
    <>
      {/* <div className="flex flex-col min-h-screen"> */}{" "}
      {/* Esta clase asegura que la app ocupe la altura completa de la pantalla */}
      {/* <Header /> */}
      {/* <Header2/> */}
      {/* <main className="flex-grow"> */}{" "}
      {/* Flex-grow permite que este elemento ocupe el espacio disponible */}
      {/* <Card /> */}
      {/* </main> */}
      {/* <Footer/> */}
      {/* <Footer2 /> */}
      {/* </div> */}
      <Router>        
        <Layout className="flex-grow flex-col min-h-screen">
          <Routes>
            <Route path="/table" element={<CsvToJsonAndTableWithAdvancedFilters />} />
          </Routes>
          <Routes>
            <Route path="/overview" element={<Overview />} />
          </Routes>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
          </Routes>

        </Layout>
      </Router>
    </>
  );
}

export default App;
