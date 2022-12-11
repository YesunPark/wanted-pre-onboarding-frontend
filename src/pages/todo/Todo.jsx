import { useState } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import ListItem from './components/ListItem';

const ToDo = () => {
  const [listArr, setListArr] = useState([{ id: 1, todo: 'hi' }]);

  return (
    <TodoContainer>
      <Title />
      {listArr.map((list) => {
        return <ListItem key={list.id} list={list} setListArr={setListArr} />;
      })}
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
