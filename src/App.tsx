import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import { PortfolioView } from "./components/PortfolioView";
import PortfolioNavBar from "./components/PortfolioNavBar";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <PortfolioNavBar />
      <PortfolioView />
    </div>
  );
}

export default App;
