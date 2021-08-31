
import React from 'react';
import styles from './selfIntroduction.module.css'

const SelfIntroduction = (props) => {
    return (
        <div className={styles.self} >
            <ul className={styles.logo}>
                <li>
                    <span>이름</span>
                    <span>장익순</span>
                </li>
                <li>
                    <span>생년월일(나이)</span>
                    <span> 1992년 10월 09일 (30세)</span>
                </li>
                <li>
                    <span>성별</span>
                    <span>남</span>
                    
                </li>
                <li>
                    <span>한마디</span>
                    <span>
                        많은 것에 도전하고 학습하고 싶은 프론트엔드 개발자
                    </span>
                </li>
                <li>
                    <span>공부한 것</span>
                    <span>
                        HTML, css, JavaScript, react, Java, MFC, 
                    </span>
                </li>
            </ul>
        </div>
    );
    }

export default SelfIntroduction;