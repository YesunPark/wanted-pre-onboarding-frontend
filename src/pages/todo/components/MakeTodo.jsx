import { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from '../../../components/Box.style';
import { theme } from '../../../styles/theme';

const MakeTodo = ({ listArr, setListArr }) => {
  const [inputToDo, setInputToDo] = useState('');
  const inputRef = useRef(null);

  function handleInput(e) {
    setInputToDo(e.target.value);
  }

  const clickSaveBtn = () => {
    fetch('https://pre-onboarding-selection-task.shop/todos', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: inputToDo,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const { id, isCompleted, todo, userId } = res;
        setListArr([...listArr, { id, isCompleted, todo, userId }]);
      });
    setInputToDo('');
  };

  return (
    <MakeTodoContainer>
      <BoxStyle bgColor={theme.color.mainBg} className='make-to-do'>
        <div>
          <FontAwesomeIcon icon={faLemon} className='icon' />
          <input
            ref={inputRef}
            placeholder='할 일을 입력해주세요'
            value={inputToDo}
            onChange={handleInput}
            onKeyPress={(e) => {
              e.key === 'Enter' && clickSaveBtn();
            }}
            size={20}
            maxLength={12}
            spellCheck='false'
          />
        </div>
        <button
          onClick={() => {
            clickSaveBtn();
            if (inputRef.current !== null) inputRef.current.focus();
          }}>
          저장
        </button>
      </BoxStyle>
    </MakeTodoContainer>
  );
};

const MakeTodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  input,
  button {
    font-size: 18px;
  }
  button {
    padding: 0px;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default MakeTodo;
