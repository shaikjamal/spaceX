import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SpacexAddress from "./components/SpacexAddress";
import SpacexHistory from "./components/SpacexHistory";

function App() {
  return (
    <Router key="routerswitch">
      <Route exact path="/address" component={SpacexAddress} />
      <Route  path="/history" component={SpacexHistory} />
    </Router>

  );
}

export default App;
