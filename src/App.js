import './App.css';
import Formtext from './components/Formtext';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Formtext heading='React-friendly JSX code effortlessly'/>
    </div>
    </>
  );
}

export default App;
