import { useEffect, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import './App.css';
import BackToTop from './Pages/BackToTop/BackToTop';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="mx-auto" style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40vh" }}>
          <ClimbingBoxLoader color={"#ec3b3b"} loading={loading} size={20} />
        </div>
      ) : (
        <>
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
    </>
      )}
    </div>
  );
}

export default App;
