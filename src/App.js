import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Homapage";
import Details from "./pages/Details";
import Defaut from "./pages/Pagedéfault";
import Recette from "./pages/Recettes";
import Recettee from "./pages/Recettee";
import Paramétres from "./pages/Settings";
import Ajout from "./pages/Ajout";
import Evalue from "./pages/Evalue";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Nav from "./components/Navbar";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Recette" Component={Recette} />
        <Route path="/Recette/:id" Component={Details} />
        <Route path="/Recettee" Component={Recettee} />
        <Route path="/Paramétres" Component={Paramétres} />
        <Route path="/Ajout" Component={Ajout} />
        <Route path="/Evalue" Component={Evalue} />
        <Route Component={Defaut} />
      </Routes>
    </Router>
  );
}

export default App;
