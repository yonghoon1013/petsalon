import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
        <div className='contentsWrapper'>
            <form>
                <input type='text' className='idInput'/>
                <div className='pwInputWrapper' placeholder='아이디'>
                    <input type='password' className='pwInput' placeholder='비밀번호'/>
                    <button type='button' className='pwVisualBtn'/>
                </div>
                <button className='loginBtn'>
                    로그인
                </button>
            </form>
            <nav>
                <ul className='searchWrapper'>
                    <li className='searchIdBtn'>아이디 찾기</li>
                    <li className='searchPwBtn'>비밀번호 찾기</li>
                </ul>    
                <Link>
                    회원가입 하기
                </Link>
            </nav>
        </div>
  )
}
