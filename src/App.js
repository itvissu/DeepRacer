import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Racetracks from './components/Racetracks';
import Racetracks1 from './components/Racetracks1';
import Group from './components/Group';

function App() {
  return (
    <Router>
       <Routes>
       <Route path="/" element={<Firstpage/>} />
       <Route path="/secondnew" element={<Group/>} />
       <Route path="/second" element={<Secondpage/>} />
       <Route path="/third" element={<Racetracks/>} />
       <Route path="/fourth" element={<Racetracks1/>} />
       </Routes>
     </Router>


    // <div className="App">
    // {/* <Secondpage/> */}
    // {/* <Firstpage/> */}
    // {/* <Racetracks/> */}
    // {/* <Racetracks1/> */}
    // <Group/>
    // </div>
  );
}

export default App;
