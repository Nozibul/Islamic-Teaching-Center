import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Notfound from './component/NotFound/Notfound';
import About from './component/about/About';
import Services from './component/services/Services';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
        
        <Router>
          {/* Header nav link */}
           <Header />

          <Switch>
          <Route exact path="/">
               <Home />
             </Route>
             <Route exact path="/home">
               <Home />
             </Route>
             <Route path="/about">
               <About />
             </Route>
             <Route path="/services">
               <Services />
             </Route>
             <Route path="*">
               <Notfound />
             </Route>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
