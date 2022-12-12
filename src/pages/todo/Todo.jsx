import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import ListItem from './components/ListItem';
import MakeTodo from './components/MakeTodo';

const ToDo = () => {
  const [listArr, setListArr] = useState([]);

  useEffect(() => {
    fetch('https://pre-onboarding-selection-task.shop/todos', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setListArr(res);
      });
  }, []);

  return (
    <TodoContainer>
      <Title />
      <ListContainer>
        {!!listArr.length &&
          listArr.map((list) => {
            return (
              <ListItem key={list.id} list={list} setListArr={setListArr} />
            );
          })}
      </ListContainer>
      <MakeTodo listArr={listArr} setListArr={setListArr} />
    </TodoContainer>
  );
};

const TodoContainer = styled.section`
  position: relative;
  width: 370px;
  height: 650px;
  background-color: #ffffff;
`;

const ListContainer = styled.div`
  height: 520px;
  overflow-y: auto;
`;

export default ToDo;
