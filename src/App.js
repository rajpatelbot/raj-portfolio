import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
// import DarkmodeSwich from './components/DarkmodeSwich';
import HomePage from './pages/HomePage';
import Header from './layout/Header';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      {/* <DarkmodeSwich /> */}
    </div>
  );
}

export default App;
