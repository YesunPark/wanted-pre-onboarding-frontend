import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from '../../../styles/Box.style';

const ListItem = ({ list, setListArr }) => {
  const { id, todo, isCompleted, userId } = list;
  const [checked, setChecked] = useState('no-checked');
  const [inputContent, setInputContent] = useState(todo);
  const [isModifying, setIsModifying] = useState(false);

  return (
    <ListContainer id={checked}>
      <BoxStyle className='list-item'>
        <div className='checkbox'>
          <FontAwesomeIcon icon={faSquareCheck} className='icon' />
          <input
            type='text'
            className={`content ${checked} ${isModifying && 'modifying'}`}
            value={inputContent}
            autoComplete='off'
            size={20}
            maxLength={12}
            spellCheck='false'
          />
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
          <button
            className='save-modify'
            onClick={() => {
              setIsModifying(false);
            }}>
            수정완료
          </button>
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
    padding: 0px;
    margin: 0px 15px 0px 0px;
    font-size: 18px;
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
