import { useState } from 'react';
import styled from 'styled-components';

const Signup = () => {
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });
  console.log(input);
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <SignupContainer>
      <input
        name='emailInput'
        placeholder='이메일을 입력하세요. (@포함)'
        value={input.emailInput}
        onChange={handleInputValue}
      />
      <input
        name='pwInput'
        placeholder='비밀번호를 입력하세요. (8자 이상)'
        value={input.pwInput}
        onChange={handleInputValue}
      />
      <button>회원가입하기</button>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 650px;
  background-color: #ffffff;
`;

export default Signup;
