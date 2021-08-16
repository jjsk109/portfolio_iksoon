
import { Component } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import SelfIntroduction from './selfIntroduction/selfIntroduction';
import 'react-calendar/dist/Calendar.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li>자기소개</li>
            <li>관심사</li>
          </ul>
        </header>
        <SelfIntroduction/>
        <Calendar/>
      </div>
    );
  }
}

export default App;
