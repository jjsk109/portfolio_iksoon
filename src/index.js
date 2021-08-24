import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageUploader from './service/image_uploader';
import MyDropzone from './imgUpload/myDropzone';

const imageUploader = new ImageUploader();
const FileInput = props => (
  < MyDropzone {...props} imageUploader={imageUploader} />
)

ReactDOM.render(
  <React.StrictMode>
    <App FileInput= {FileInput} />
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
