"use client";

import Link from 'next/link';

export default function Intro() {
  return (
    <section className='introWrapper'>
        <div className='headWrapper'>
            <h1>
                <img src='' alt='댕냥살롱'/>
            </h1>
            <span>
                세상에서 가장 가까운 반려동물 미용실
            </span>
            <strong>
                지금 시작해보세요!
            </strong>
        </div>
        <ul className='imgSlideAni'>
            <li></li>
            <li></li>
        </ul>
        <div className='btnWrapper'>
            <button type='button' className='kakaoLoginBtn'>
                카카오로 시작하기
            </button>
            <button type='button' className='nomalLoginBtn'>
                이메일로 시작하기
            </button>
            <Link>이미 계정이 있어요</Link>
        </div>
    </section>
  )
}
