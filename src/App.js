import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import BackToTop from './Pages/BackToTop/BackToTop';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

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
        <Route path="/projectDetails/:projectId">
          <ProjectDetails></ProjectDetails>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
