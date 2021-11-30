import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blogs from './Pages/Blogs/Blogs';
import Bike from './Pages/Bike/Bike';
import Pharma from './Pages/Pharma/Pharma';
import Travel from './Pages/Travel/Travel';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/bike">
          <Bike></Bike>
        </Route>
        <Route path="/pharma">
          <Pharma></Pharma>
        </Route>
        <Route path="/travel">
          <Travel></Travel>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
