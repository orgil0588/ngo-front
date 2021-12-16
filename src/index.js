import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './index.css';
import App from './Pages/App';
import About from './Pages/About';
import Wwd from './Pages/Wwd';
import Education from "./Pages/Education"
import Research from "./Pages/Research"
import JoinUs from "./Pages/JoinUs"
import Background from "./Components/Background"
import Admin from "./Pages/Admin"
import News from "./Pages/News"
import AdminPanel from "./Pages/AdminPanel"
import NewsDetail from "./Components/NewsDetail"
ReactDOM.render(
  <React.StrictMode>
<Background>

  <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/wwd" component={Wwd} />
        <Route exact path="/financial-education" component={Education} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/join-us" component={JoinUs} />
        <Route exact path="/admin" component={Admin} />
        <Route  exact path="/news" component={News} />
        <Route  path="/news/:id" component={NewsDetail} />


        <Route  path="/adminPanel" component={AdminPanel} />
    
 
  
      </Switch>
    </Router>
    </Background>
  </React.StrictMode>,
  document.getElementById('root')
);

