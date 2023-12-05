"use client";

import Link from 'next/link';

export default function Intro() {
  return (
    <>
        <ul className='imgSlideAni'>
            <li>
                <img src='/LeeTest/img/slide_ani.svg' alt='강아지와 고양이 이미지'/>
            </li>
            <li>
                <img src='/LeeTest/img/slide_ani.svg' alt='강아지와 고양이 이미지'/>
            </li>
        </ul>
        <div className='btnWrapper'>
            <button type='button' className='kakaoSingUpBtn'>
                카카오로 회원가입
            </button>
            <button type='button' className='nomalSingUpBtn'>
                이메일로 회원가입
            </button>
            <Link href=''>이미 계정이 있어요</Link>
        </div>
    </>
  )
}
