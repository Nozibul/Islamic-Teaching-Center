import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import Slider from './component/slider/Slider';

function App() {
  return (
    <div className="App">
        <Button variant="primary">click me</Button>
        <Slider />
    </div>
  );
}

export default App;
