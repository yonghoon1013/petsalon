"use client"

import React from 'react'
import styles from './style.module.scss'

function Favorite() {
  return (
    <section>
        <div className='titleWrapper'>
            <h2 className='title'>내 관심 미용</h2>
             <button className='serch'><img src='./serch.png'></img></button>
             <button className='notice'><img src='./notice.png'></img></button>
        </div>

        <div className='mainWrapper'>
            <p className='text'>관심 등록한 디자이너 & 미용실이 없네요.</p>
            <button className='more'>인기 있는 미용 둘러보기</button>
        </div>

        
    </section>
  )
}

export default Favorite