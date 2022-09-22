import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurCalcApp from './components/Calculator';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Quote from './components/Quote';

class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navigation />
          <section className="content">
            <Routes>
              <Route path="/math-magician" element={<Home />} />
              <Route
                path="/Calculator"
                element={<OurCalcApp className="calculator" />}
              />
              <Route path="/Quote" element={<Quote />} />
            </Routes>
          </section>
        </Router>
      </>
    );
  }
}
export default CalcApp;
