import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

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
    <LoginContainer>
      <input
        name='emailInput'
        placeholder='이메일'
        value={input.emailInput}
        onChange={handleInputValue}
      />
      <input
        name='pwInput'
        placeholder='비밀번호'
        value={input.pwInput}
        onChange={handleInputValue}
      />
      <button onClick={clickLoginBtn}>로그인</button>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 600px;
  background-color: #ffffff;
`;

export default Login;
