import './App.css';
import Start from './components/Start';
import { Route,Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Third from './components/Third';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route exact path='/resume' element={<Resume />} />
        <Route exact path='/Third' element={<Third />} />

      </Routes>
    </div>
  );
};

export default App;
