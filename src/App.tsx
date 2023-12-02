import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import AddQuote from "./containers/AddQuote/AddQuote";
import QuoteEdit from "./components/QuoteEdit/QuoteEdit";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes/:category" element={<Home />} />
          <Route path="/add-quote" element={<AddQuote />} />
          <Route path="/quotes/:id/edit" element={<QuoteEdit />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
