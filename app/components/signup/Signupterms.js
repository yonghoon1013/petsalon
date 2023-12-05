import React from 'react'

export default function Signupterm() {
  return (
    <>
    <div className='titleWrapper'>
        <button type='button' className='prevBtn' />
        <h2>약관 동의</h2>
    </div>
    
    <strong className='welcomeText'>
      반가워요!<br />
      댕냥 살롱에 오신 것을 환영합니다.
    </strong>

    <form className='signUpTermForm'>
        
        <div className='termWrapper'>
          <strong className='allCheck'> 
            전체동의 <input type='checkbox' name='allTerm' className='allTerm'/>
          </strong>
          <ul>
            <li>
              댕냥 살롱 이용약관 동의(필수) <input type='checkbox' name='mainTerm' className='mainTerm'/>
            </li>
            <li>
              개인정보 수집 및 이용 동의 (필수) <input type='checkbox' name='privTerm' className='privTerm'/>
            </li>
            <li>
              위치기반 서비스 이용 동의(필수) <input type='checkbox' name='locationTerm' className='locationTerm'/>
            </li>
            <li>
              만 14세 이상 확인(필수) <input type='checkbox' name='teenagerTerm' className='teenagerTerm'/>
            </li>
            <li>
              마케팅정보 수신 동의(선택) <input type='checkbox' name='marketingTerm' className='marketingTerm'/>
            </li>
          </ul>
        </div>

        <button className='submitBtn'>
            다음으로
        </button>
    </form>    
</>
  )
}
