import { useState } from 'react';
import SignupLoginForm from '../../styles/SignupLoginForm.style';

const Signup = () => {
  const [input, setInput] = useState({ emailInput: '', pwInput: '' });
  const { emailInput, pwInput } = input;

  const clickSignupBtn = () => {
    fetch('https://pre-onboarding-selection-task.shop/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: input.emailInput,
        password: input.pwInput,
      }),
    }).then((res) => res.json());
  };

  return (
    <SignupLoginForm
      title='회원가입'
      input={input}
      setInput={setInput}
      email={emailInput}
      pw={pwInput}
      btnTxt='회원가입하기'
      btnClick={clickSignupBtn}
    />
  );
};

export default Signup;
