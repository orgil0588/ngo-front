import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./Pages/App";
import Education from "./Pages/Education";
import Research from "./Pages/Research";
import Background from "./Components/Background";
import News from "./Pages/News";
import Loading from "./Components/Loading/index"
const About = React.lazy(() => {
  return import("./Pages/About");
});
const Wwd = React.lazy(() => {
  return import("./Pages/Wwd");
});
const NewsDetail = React.lazy(() => {
  return import("./Components/NewsDetail");
});
const JoinUs = React.lazy(() => {
  return import("./Pages/JoinUs");
});
const Admin = React.lazy(() => {
  return import("./Pages/Admin");
});
const AdminPanel = React.lazy(() => {
  return import("./Pages/AdminPanel");
});

ReactDOM.render(
  <React.StrictMode>
    <Background>
      <Suspense fallback={<Loading/>}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/wwd" component={Wwd} />
            <Route exact path="/financial-education" component={Education} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/join-us" component={JoinUs} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/news" component={News} />
            <Route path="/news/:id" component={NewsDetail} />

            <Route path="/adminPanel" component={AdminPanel} />
          </Switch>
        </Router>
      </Suspense>
    </Background>
  </React.StrictMode>,
  document.getElementById("root")
);
