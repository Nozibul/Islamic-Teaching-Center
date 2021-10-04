import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import Home from './component/Home/Home';
import Slider from './component/slider/Slider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './component/NotFound/Notfound';

function App() {
  return (
    <div className="App">
        
        <Router>
          <Switch>
             <Route path="/home">
               <Home />
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
