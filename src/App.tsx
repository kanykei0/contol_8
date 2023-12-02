import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import AddQuote from "./containers/AddQuote/AddQuote";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-quote" element={<AddQuote />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
