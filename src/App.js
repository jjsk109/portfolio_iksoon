
import { Component, useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import SelfIntroduction from './selfIntroduction/selfIntroduction';
import 'react-calendar/dist/Calendar.css';
import GoogleMapReact  from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const [value, onChange] = useState(new Date());
  const defaultProps = {
    center: {
      lat: 37.0083705,
      lng: 127.0802772
    },
    zoom: 11
  };
  console.log(defaultProps);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>자기소개</li>
          <li>관심사</li>
        </ul>
      </header>
      <SelfIntroduction/>
      <Calendar
        onChange={onChange}
        value={value}  
      />
       <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </div>
  );
  
}

export default App;
