import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Notfoundpage } from "./pages/Notfoundpage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
