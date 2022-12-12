import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from './styles/Box.style';
import { theme } from './styles/theme';

const Title = () => {
  return (
    <BoxStyle bgColor={theme.color.mainBg} className='title'>
      <div>
        <FontAwesomeIcon icon={faLemon} className='icon' />
        <div>Todo List</div>
      </div>
    </BoxStyle>
  );
};

export default Title;
