import {React} from 'react';
import styles from './portfolioHeader.module.css';
import { faAddressBook, faAddressCard, faBox, faCamera, faImage, faImages } from "@fortawesome/free-solid-svg-icons";
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
    return(
    <header className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.tag}> <a onClick={onClickSelf} ><FontAwesomeIcon icon={faAddressCard} size="1x" /> 자기소개</a></li>
            <li className={styles.tag}><a onClick={onClickAsw} > <FontAwesomeIcon icon={faBox} size="1x" />이것저것</a></li>
            <li className={styles.tag}><a onClick={onClickHappit} > <FontAwesomeIcon icon={faImages} size="1x" />겔러리</a></li>
        </ul>
    </header>
)};

export default PortfolioHeader;