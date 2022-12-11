import styled from 'styled-components';

import Title from './components/Title';

const ToDo = () => {
  return (
    <TodoContainer>
      <Title />
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
