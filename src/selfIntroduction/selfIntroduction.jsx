import React from 'react';
import styles from './selfIntroduction.module.css'
import { faAddressBook, faAddressCard, faBox, faCamera, faCaravan, faImage, faImages, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SelfIntroduction = (props) => {
    return (
        <div className={styles.self} >
            <ul className={styles.logo}>
                <li>
                    <span>이름</span>
                    <span> : </span>
                    <span>장익순</span>
                </li>
                <li>
                    <span>생년월일(나이)</span>
                    <span> : </span>
                    <span> 1992년 10월 09일 (30세)</span>
                </li>
                <li>
                    <span>성별</span>
                    <span> : </span>
                    <span>남</span>
                    
                </li>
                <li>
                    <span>비전</span>
                    <span> : </span>
                    <span>
                        많은 것에 도전하고 학습하고 싶은 개발자
                    </span>
                </li>
                <li className={styles.skill}>
                    <span className={styles.skill_Title}>Skill</span>
                    <div className={styles.skill_content}>
                        <span className={styles.html}> <div>Html5 85%</div></span>
                        <span className={styles.CSS}><div>CSS 75%</div></span>
                        <span className={styles.js}><div>JS 85%</div></span>
                        <span className={styles.react}><div>React 70%</div></span>
                        <span className={styles.java}><div>Java 65%</div></span>
                    </div>
                </li>
                <li>
                    기타 소개
                </li>
            </ul>
        </div>
    );
    }

export default SelfIntroduction;