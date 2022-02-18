import './App.css';
import {Container, } from 'react-bootstrap'
import Header from './components/Header'
import Home from './components/Home'
// import About from './components/About'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home/>} exact />
              {/* <Route path="/about" element={<About/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/contact" element={<Contact/>} /> */}
            </Routes>

          </Container>
        </main>
    </Router>
  
  );
}

export default App;
