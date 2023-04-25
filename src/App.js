import './App.css';
import { Frontpage } from './component/Frontpage';
import { Midpage } from './component/Midpage';
import { Navbar } from './component/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Frontpage />
    <Midpage />
    </>
  );
}

export default App;
