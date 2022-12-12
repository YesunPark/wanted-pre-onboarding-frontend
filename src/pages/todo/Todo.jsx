import { useState } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import ListItem from './components/ListItem';
import MakeTodo from './components/MakeTodo';

const ToDo = () => {
  const [listArr, setListArr] = useState([]);

  return (
    <TodoContainer>
      <Title />
      {!!listArr.length &&
        listArr.map((list) => {
          return <ListItem key={list.id} list={list} setListArr={setListArr} />;
        })}
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

export default ToDo;
