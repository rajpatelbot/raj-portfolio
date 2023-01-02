import React, { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Loader from './components/Loader';
// import DarkmodeSwich from './components/DarkmodeSwich';

const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Error = lazy(() => import('./pages/Error'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
}

export default App;
