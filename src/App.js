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
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

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

             <Route exact path="/about">
               <About />
             </Route>

             <Route exact path="/services">
               <Services />
             </Route>
             <Route exact path="/contact">
               <Contact />
             </Route>

             <Route path="*">
               <Notfound />
             </Route>
          </Switch>
        </Router>
        <Footer />
       
    </div>
  );
}

export default App;
