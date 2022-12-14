import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './components/Title';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Todo from './pages/todo/Todo';

const App = () => {
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
