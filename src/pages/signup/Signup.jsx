import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupLoginForm from '../../components/SignupLoginForm.style';

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });
  const { emailInput, pwInput } = input;

  const clickSignupBtn = () => {
    fetch('https://pre-onboarding-selection-task.shop/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput,
        password: pwInput,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === '동일한 이메일이 이미 존재합니다.') {
          alert('동일한 이메일이 존재합니다.');
          setInput({ emailInput: '', pwInput: '' });
          return;
        }
        if (res.access_token) {
          alert('회원가입 성공!\n로그인 페이지로 이동합니다');
          navigate('/');
        }
      });
  };

  return (
    <SignupLoginForm
      title='회원가입'
      input={input}
      setInput={setInput}
      btnTxt='회원가입하기'
      btnClick={clickSignupBtn}
    />
  );
};

export default Signup;
