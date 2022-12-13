import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignupLoginForm = ({
  title,
  input,
  setInput,
  email,
  pw,
  btnTxt,
  btnClick,
}) => {
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <FormContainer>
      <h1 className='title'>{title}</h1>
      <div className='input-box'>
        <input
          name='emailInput'
          placeholder='이메일을 입력하세요. (@포함)'
          value={email}
          onChange={handleInputValue}
        />
        <input
          name='pwInput'
          placeholder='비밀번호를 입력하세요. (8자 이상)'
          value={pw}
          onChange={handleInputValue}
        />
      </div>
      <div className='btn-box'>
        <button onClick={btnClick}>{btnTxt}</button>
      </div>
      <Link className='link' to={title === '로그인' ? '/signup' : '/'}>
        {title === '로그인' ? '회원가입' : '로그인'}
      </Link>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 370px;
  height: 600px;
  padding: 0 15%;
  background-color: #ffffff;

  .title {
    margin-bottom: 40px;
    font-size: 25px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &.input-box {
      width: 100%;
      input {
        margin-bottom: 20px;
        padding-left: 8px;
      }
    }
    &.btn-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      button {
        margin-top: 20px;
        background-color: ${(props) => props.theme.color.main};
        &:hover {
          cursor: pointer;
        }
      }
    }

    input,
    button {
      width: 100%;
      height: 40px;
      border: 1px solid ${(props) => props.theme.color.main};
      border-radius: 3px;
    }
  }

  .link {
    margin: 20px 0 80px;
    color: ${(props) => props.theme.color.txt};
    font-size: 13px;
  }
`;

export default SignupLoginForm;
