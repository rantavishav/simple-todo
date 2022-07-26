import { useState } from 'react';
import { ICON_ADD_PNG } from '../../assests/images';
import './index.css';

export const CustomInput = ({
  placeholder = '',
  type = 'text',
  value = '',
  onChange = () => null
}) => {
  return (
    <>
      <input
        className="todo-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export const AddTaskInput = ({
  className = '',
  imgAlt = 'add-img',
  img = ICON_ADD_PNG,
  placeholder = 'Add a task',
  handleAddTask = () => null
}) => {
  const [taskDesc, setTaskDesc] = useState('');
  return (
    <div className={`todo-input-container ${className}`}>
      <CustomInput
        placeholder={placeholder}
        type="text"
        onChange={(value) => setTaskDesc(value)}
        value={taskDesc}
      />
      <img
        src={img}
        className="todo-add-button"
        alt={imgAlt}
        onClick={() => {
          if (taskDesc) {
            handleAddTask(taskDesc);
            setTaskDesc('');
          }
        }}
      />
    </div>
  );
};
