import { BG_IMG_JPG } from './assests/images';
import { Picture } from './components';
import ToDoList from './pages/toDoList';

const App = () => {
  return (
    <div className="main-container">
      <Picture img={BG_IMG_JPG} className="todo-background" />
      <ToDoList />
    </div>
  );
};

export default App;
