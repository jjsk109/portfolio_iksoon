import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageUploader from './service/image_uploader';
import MyDropzone from './imgUpload/myDropzone';
import ImageDatabase from './service/image_database';

const imageDatabase = new ImageDatabase();
const imageUploader = new ImageUploader();

const FileInput = props => (
  < MyDropzone {...props} imageUploader={imageUploader} />
)

ReactDOM.render(
  <React.StrictMode>
    <App FileInput= {FileInput} 
        imageDatabase = {imageDatabase}
    />
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
