import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="category">
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
