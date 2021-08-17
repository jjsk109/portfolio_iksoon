import React, { useState } from 'react';
import GoogleMapReact  from 'google-map-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Radio, RadioGroup } from 'react-radio-group';

function ApiCollection(props) {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const [value, onChange] = useState(new Date());
    const defaultProps = {
      center: {
        lat: 37.0083705,
        lng: 127.0802772
      },
      zoom: 11
    };
    console.log(props.props[0]);
    const [selectedValue,handleChange] = useState(props.props[0]);

    return (
        <div>
            <h3>달력 어썸</h3>
            <Calendar
                onChange={onChange}
                value={value}  
            />
            <h3>구글지도 어썸</h3>
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
            <h3>라디오 버튼 어썸</h3>
            <RadioGroup name="fruit" selectedValue={selectedValue} onChange={handleChange}>
                <Radio value="apple" />Apple
                <Radio value="orange" />Orange
                <Radio value="watermelon" />Watermelon
            </RadioGroup>
        </div>
    );
}

export default ApiCollection;