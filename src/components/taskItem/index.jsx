import { ICON_CROSS_JPG, ICON_EDIT_PNG } from '../../assests/images';
import './index.css';

const TaskItem = ({
  taskDesc = '',
  isCompleted = false,
  onClickCross = () => null,
  openModal = () => null,
  handleTaskCheckbox = () => null
}) => (
  <div className={`todo-item-container ${isCompleted ? 'active' : ''}`}>
    <div className="d-flex align-items-center">
      <div className="todo-checkbox" onClick={handleTaskCheckbox} />
      <p className="todo-item-desc">{taskDesc}</p>
    </div>
    <div className="d-flex">
      {!isCompleted && (
        <img src={ICON_EDIT_PNG} className="todo-item-edit" alt="edit-img" onClick={openModal} />
      )}
      <img
        src={ICON_CROSS_JPG}
        className="todo-item-cross"
        alt="cross-img"
        onClick={onClickCross}
      />
    </div>
  </div>
);

export default TaskItem;
