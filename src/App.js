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
      <div className={styles.background}>
       <img  src='https://res.cloudinary.com/dpwxqv19q/image/upload/v1630390131/fairy-tale-1180921_1920_xf3yx7.png' alt="잠자는 밤화면 배경" />
       </div>
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
