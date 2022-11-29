import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import GithubState from "./context/github/githubState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Home />
      </Router>
    </GithubState>
  );
};

export default App;
