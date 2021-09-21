import {React} from 'react';
import styles from './portfolioHeader.module.css';
import { faAddressBook, faAddressCard, faBox, faCamera, faCaravan, faImage, faImages, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioHeader = ({setPage}) => {
    const onClickSelf = () =>{
        setPage('self');
    }
    const onClickAsw = () =>{
        setPage('asw');
    }
    const onClickHappit = () =>{
        setPage('habbit');
    }
    const onClickCanvas = () =>{
        setPage('canvas');
    }
    return(
    <header className={styles.nav}>
        <div className={styles.logo}>
            <h1>Portfolio</h1> 
        </div>
        <ul className={styles.list}>
            <li className={styles.tag}><a onClick={onClickSelf} ><FontAwesomeIcon icon={faAddressCard} size="1x" />  자기소개</a></li>
            <li className={styles.tag}><a onClick={onClickAsw} > <FontAwesomeIcon icon={faBox} size="1x" />이것저것</a></li>
            <li className={styles.tag}><a onClick={onClickHappit}> <FontAwesomeIcon icon={faImages} size="1x" />겔러리</a></li>
            <li className={styles.tag}><a onClick={onClickCanvas}> <FontAwesomeIcon icon={faPenFancy} size="1x" />켄버스</a></li>
        </ul>
    </header>
)};

export default PortfolioHeader;