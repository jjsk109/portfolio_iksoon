import {  useState } from 'react';
import './App.css';
import SelfIntroduction from './selfIntroduction/selfIntroduction';
import ApiCollection from './apiCollection/apiCollection';
import Imgupload from './imgUpload/imgupload';


function App({FileInput}) {
  const name = useState('apple');
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>자기소개</li>
          <li>관심사</li>
        </ul>
      </header>
      
      <SelfIntroduction/>
      <ApiCollection props={name}/> 
      <Imgupload FileInput={FileInput}/> 
    </div>
  );
  
}

export default App;
