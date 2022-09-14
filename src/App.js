import React from 'react';
import OurCalcApp from './components/Calculator';
import './App.css';

class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ourApp">
        <OurCalcApp />
      </div>
    );
  }
}
export default CalcApp;
