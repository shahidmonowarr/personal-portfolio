import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import BackToTop from './Pages/BackToTop/BackToTop';
import Bike from './Pages/Bike/Bike';
import Blogs from './Pages/Blogs/Blogs';
import Foodsense from './Pages/Foodsense/Foodsense';
import Home from './Pages/Home/Home/Home';
import MobilePanda from './Pages/MobilePanda/MobilePanda';
import Pharma from './Pages/Pharma/Pharma';
import TechSpecter from './Pages/TechSpecter/TechSpecter';
import Travel from './Pages/Travel/Travel';

function App() {
  return (
    <div >
      <BackToTop></BackToTop>
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
        <Route path="/techSpecter">
          <TechSpecter></TechSpecter>
        </Route>
        <Route path="/mobilePanda">
          <MobilePanda></MobilePanda>
        </Route>
        <Route path="/bike">
          <Bike></Bike>
        </Route>
        <Route path="/pharma">
          <Pharma></Pharma>
        </Route>
        <Route path="/foodsense">
          <Foodsense></Foodsense>
        </Route>
        <Route path="/travel">
          <Travel></Travel>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
