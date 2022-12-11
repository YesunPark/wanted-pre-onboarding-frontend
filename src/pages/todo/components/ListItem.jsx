import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from '../../../styles/Box.style';

const ListItem = ({ list, setListArr }) => {
  const { id, todo, isCompleted, userId } = list;
  const [checked, setChecked] = useState('no-checked');
  const [input, setInput] = useState(todo);
  const [modifyingInput, setModifyingInput] = useState(todo);
  const [isModifying, setIsModifying] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, [isModifying]);

  function handleInput(e) {
    setModifyingInput(e.target.value);
  }

  return (
    <ListContainer id={checked}>
      <BoxStyle className='list-item'>
        <div className='checkbox'>
          <FontAwesomeIcon icon={faSquareCheck} className='icon' />
          {!isModifying && <input defaultValue={input} disabled={true} />}
          {isModifying && (
            <input
              ref={inputRef}
              type='text'
              className={`content ${checked} ${isModifying && 'modifying'}`}
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
  .icon {
    color: ${(props) => props.id === 'checked' && '#91D086'};
    &.checked {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .content {
    color: ${(props) => props.id === 'checked' && props.theme.color.grayTxt};
    text-decoration: ${(props) => props.id === 'checked' && 'line-through'};
  }
  .small {
    font-size: ${(props) => props.theme.size.iconRight};
    margin: 0px 20px 0px 0px;
  }
  .save-modify {
    height: 40px;
    padding: 0px;
    margin-right: 15px;
    font-size: 16px;
    &:hover {
      cursor: pointer;
    }
  }

  input {
    color: ${(props) => props.theme.color.txt};
    font-size: 18px;
  }
`;

export default ListItem;
