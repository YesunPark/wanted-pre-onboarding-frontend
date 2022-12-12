import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from '../../../styles/Box.style';

const ListItem = ({ list, setListArr }) => {
  const { id, todo, isCompleted, userId } = list;
  const [checked, setChecked] = useState(isCompleted);
  const [input, setInput] = useState(todo);
  const [modifyingInput, setModifyingInput] = useState(todo);
  const [isModifying, setIsModifying] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, [isModifying]);

  // list.todo === 'check' && console.log(checked.toString());

  const clickCheckBox = () => {
    if (!isModifying) {
      checked ? setChecked(false) : setChecked(true);
      fetch(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todo: input,
          isCompleted: checked ? false : true,
        }),
      }).then((res) => res.json());
    }
  };

  function handleInput(e) {
    setModifyingInput(e.target.value);
  }

  return (
    <ListContainer id={checked.toString()}>
      <BoxStyle className='list-item'>
        <div className='checkbox' onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className='icon' />
          {!isModifying && (
            <input
              defaultValue={input}
              className={`content ${checked.toString()} ${
                isModifying && 'modifying'
              }`}
              disabled={true}
            />
          )}
          {isModifying && (
            <input
              ref={inputRef}
              type='text'
              className={`content ${checked.toString()} ${
                isModifying && 'modifying'
              }`}
              value={modifyingInput}
              onChange={handleInput}
              disabled={isModifying ? false : true}
              autoComplete='off'
              size={20}
              maxLength={12}
              spellCheck='false'
            />
          )}
        </div>
        {!isModifying && (
          <div>
            <FontAwesomeIcon
              onClick={() => setIsModifying(true)}
              icon={faPencil}
              className={`icon small ${checked}`}
            />
            <FontAwesomeIcon icon={faTrashCan} className='icon small' />
          </div>
        )}
        {isModifying && (
          <div>
            <button
              className='save-modify'
              onClick={() => {
                setModifyingInput(input);
                setIsModifying(false);
              }}>
              취소
            </button>
            <button
              className='save-modify'
              onClick={() => {
                setInput(modifyingInput);
                setIsModifying(false);
              }}>
              제출
            </button>
          </div>
        )}
      </BoxStyle>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  .content {
    color: ${(props) => props.id === 'true' && props.theme.color.grayTxt};
    text-decoration: ${(props) => props.id === 'true' && 'line-through'};
  }
  .icon {
    color: ${(props) => props.id === 'true' && '#91D086'};
    &.true {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .small {
    font-size: ${(props) => props.theme.size.iconRight};
    margin: 0px 20px 0px 0px;
  }
  input {
    color: ${(props) => props.theme.color.txt};
    font-size: 18px;
  }
`;

export default ListItem;
