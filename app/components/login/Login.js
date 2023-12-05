"use client"
import axios from 'axios'
import Link from 'next/link';
import React, { useRef, useState } from 'react'

function Login() {
    const elPwInput = useRef();
    const [type, setType] = useState('password');

    const loginFn = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const objData = Object.fromEntries(formData);

        console.log(Date.now());

        axios.get(`/api/login?id=${objData.id}&pw=${objData.pw}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.length > 0) {
                sessionStorage.setItem("id", res.data[0].id);
                sessionStorage.setItem("nick", res.data[0].nickname);
            } else {
                alert("실패하셨습니다."); //"응 실패 그거"
            }
        })
    }//loginFn(e) 함수정의

    const pwVisualFun = (e) => {
        e.target.classList.toggle('active');

        if(e.target.classList.contains('active')){
            setType('text');
          }else{
            setType('password');
          }
    }//pwVisualFun(e) 함수정의

  return (
        <form className='contentsWrapper' onSubmit={loginFn}>
            <input type='text' className='idInput' name="id" placeholder='아이디'/>
            <div className='pwInputWrapper'>
                <input type={type} className='pwInput' name="pw" placeholder='비밀번호' ref={elPwInput}/>
                <button type='button' className='pwVisualBtn' onClick={pwVisualFun}/>
            </div> 
            <button className='loginBtn'>
                로그인
            </button>
            <nav>
                <button type='button' className='kakaoLoginBtn'>
                    카카오로 로그인
                </button>   
                <Link href='./intro' className="signUpLink">
                    회원가입 하기
                </Link>
            </nav>
        </form>
  )
}

export default Login
