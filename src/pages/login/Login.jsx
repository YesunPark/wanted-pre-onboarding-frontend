import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupLoginForm from '../../components/SignupLoginForm.style';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });
  const { emailInput, pwInput } = input;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      alert('이미 로그인하셨습니다\nTodo리스트로 이동합니다.');
      navigate('/todo');
    }
  }, [navigate]);

  const clickLoginBtn = () => {
    fetch('https://pre-onboarding-selection-task.shop/auth/signin', {
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
        if (res.message) {
          alert('해당 사용자가 존재하지 않습니다.');
          setInput({ emailInput: '', pwInput: '' });
        } else if (res.access_token) {
          localStorage.setItem('token', res.access_token);
          navigate('/todo');
        }
      });
  };

  return (
    <SignupLoginForm
      title='로그인'
      input={input}
      setInput={setInput}
      btnTxt='로그인하기'
      btnClick={clickLoginBtn}
    />
  );
};

export default Login;
