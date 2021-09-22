import React from 'react';
import styles from './selfIntroduction.module.css'
import { faAddressBook, faAddressCard, faBox, faCamera, faCaravan, faImage, faImages, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SelfIntroduction = (props) => {
    return (
        <div className={styles.self} >
            <img className={styles.self_img} src="http://res.cloudinary.com/dpwxqv19q/image/upload/v1632276502/icuynotjs692j0f9uh9d.jpg" alt="" />
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
                    <span>전화번호</span>
                    <span> : </span>
                    <span>010-3520-3923</span>
                </li>
                <li>
                    <span>주소</span>
                    <span> : </span>
                    <span>경기도 평택시 어인남로 39-2</span>
                </li>
                <li>
                    <span>깃허브</span>
                    <span> : </span>
                    <span><a href="https://github.com/jjsk109">https://github.com/jjsk109</a></span>
                </li>
           
                <li className={styles.skill}>
                    <span className={styles.skill_Title}>Skill</span>
                    <div className={styles.skill_content}>
                        <span className={styles.html}> <div>Html5 95%</div></span>
                        <span className={styles.CSS}><div>CSS 95%</div></span>
                        <span className={styles.js}><div>JS 95%</div></span>
                        <span className={styles.react}><div>React 80%</div></span>
                        <span className={styles.java}><div>Java 60%</div></span>
                    </div>
                </li>
                <li>
                    프로젝트
                    <li>2018  SDV 중형 세정 전 이미지 검사기 개발</li>
                    <li>2019  SDV 초대형 세정 전, 얼라인 검사기 개발</li>
                    <li>2019  SDC 중형 검사기 개발</li>
                    <li>2028  SDC 중형 검사기 PM</li>
                </li>
                <li>
                    <span>비전</span>
                    <span> : </span>
                    <span>
                        많은 것에 도전하고 학습하고 싶은 개발자 <br/>
                        비전공자로서 이전 C언어 관련 작업을 하였으나 프로그램 개발에서 디버깅 다음 고객 대응 버그 수정을 하며 개발이라는 영향력을 키웠습니다
                        늦었다고 생각되어 남들보다 더 많이 노력하게 되었고 단지 다른 언어 이전 경험이 없었다가 아닌 새로운 것을 시켜도 노력하며 해 나갈 사람입니다
                    </span>
                </li>
            </ul>
        </div>
    );
    }

export default SelfIntroduction;