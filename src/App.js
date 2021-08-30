import {  useState } from 'react';
import styles from './App.module.css';
import SelfIntroduction from './selfIntroduction/selfIntroduction';
import ApiCollection from './apiCollection/apiCollection';
import Imgupload from './imgUpload/imgupload';
import PortfolioHeader from './header/portfolioHeader';


function App({FileInput, imageDatabase}) {
  const name = useState('apple');
  const [page, setPage] = useState('self');
 
  return (
    <div className={styles.App}>
      <PortfolioHeader setPage={setPage} />
      <section className={styles.toc}>
      {(() => {
        switch (page) {
          case 'self':
            return  <SelfIntroduction/>
          case 'asw':
            return  <ApiCollection props={name}/> 
          case 'habbit':
            return <Imgupload 
              FileInput={FileInput}
              imageDatabase = {imageDatabase}
            /> 
          default:
            return null
        }
      })()}    
    </section>
      
    </div>
  );
  
}

export default App;
