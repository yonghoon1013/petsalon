"use client"
import React, { useContext } from 'react'
import styles from './mypage.module.scss'
import { myContext } from '../Context'

function Mypage() {
  const {profView} = useContext(myContext);

  return (
    <section className={styles.mypageSec}>
      <div className={styles.profile}>
        <div className={styles.title}>마이페이지</div>
        <div className={styles.titleBox}>
          <figure className={styles.profPic}>
            <img src={profView}/>
          </figure>
          <div className={styles.profName}><strong>김아무개</strong><button className={styles.nameSett}><figure><img src='../asset/mypage/pensil.png'/></figure></button></div>          
          <span className={styles.profEmail}>sdfgsf@naver.com</span>         
          <p className={styles.profDesc}>설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들</p>         
        </div>
        <div className={styles.working}>
          <div><strong>영업시작</strong></div>
          <div><input type='checkbox'/></div>
        </div>
      </div>
      <div className={styles.workpics}>
        <div className={styles.title}>나의 포트폴리오</div>
        <div className={styles.pics}>
          <ul className={styles.picBox}>
            <li className={styles.picAdd}>
              <figure><img/></figure>
            </li>
            <li>
              <figure><img/></figure>
            </li>
            <li>
              <figure><img/></figure>
            </li>
            <li>
              <figure><img/></figure>
            </li>
            <li>
              <figure><img/></figure>
            </li>
            <li>
              <figure><img/></figure>
            </li>
            <li>
              <figure><img/></figure>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <strong>나의 영업정보</strong>
          <button className={styles.infoSetting}>
            <figure><img src='../asset/mypage/setting.png'/></figure>
          </button>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.dDesc}>
            <span>안내사항</span>
            <span>설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들</span>
          </div>
          <div className={styles.dPrice}>
            <span>가격정보</span>
            <span>설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들설명들</span>
          </div>
          <div className={styles.dTime}>
            <span>영업시간</span>
            <span>21:23 ~ 13:42</span>
          </div>
          <div className={styles.dAddress}>
            <span>주소</span>
            <span>어디어디어쩌구저쩌구</span>
          </div>
          <div className={styles.dNumber}>
            <span>H.P</span>
            <span>010-1111-2222</span>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Mypage