import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupLoginForm from '../../styles/SignupLoginForm.style';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });
  const { emailInput, pwInput } = input;

  const clickLoginBtn = () => {
    fetch('https://pre-onboarding-selection-task.shop/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: input.emailInput,
        password: input.pwInput,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('token', res.access_token);
        navigate('/todo');
      });
  };

  return (
    <SignupLoginForm
      title='로그인'
      input={input}
      setInput={setInput}
      email={emailInput}
      pw={pwInput}
      btnTxt='로그인하기'
      btnClick={clickLoginBtn}
    />
  );
};

export default Login;
