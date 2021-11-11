import './App.css';
import Start from './components/Start';
import { Route,Routes } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route exact path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
