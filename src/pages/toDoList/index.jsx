import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../../dummyData';

import { ICON_ADD_PNG } from '../../assests/images';
import {
  AddTaskInput,
  CustomInput,
  EditTaskModal,
  Header,
  TaskListContainer
} from '../../components';

import './index.css';
import { useDebounce } from '../../hooks';

const ToDoList = () => {
  // const [taskList, setTaskList] = useState([]);
  const [taskList, setTaskList] = useState(data || []);
  const [tempTaskList, setTempTaskList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [updatedTaskDesc, setUpdateTaskDesc] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState({
    id: '',
    isShow: false,
    taskDesc: ''
  });

  // added debouncing to avoid performance issues
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const openModal = (taskDesc, id) => {
    setUpdateTaskDesc(taskDesc);
    setShowModal({ id, isShow: true, taskDesc });
  };
  const closeModal = () => setShowModal({ id: '', isShow: false, taskDesc: '' });

  const handleTaskAdd = (taskDesc) => {
    // dont add repeated tasks
    if (taskList.find((task) => task.taskDesc === taskDesc)) return;
    // add new task to the list
    return setTaskList([...taskList, { id: uuidv4(), isCompleted: false, taskDesc }]);
  };

  // delete task from the list
  const handleTaskDelete = (taskId) => setTaskList(taskList.filter((task) => task.id !== taskId));

  // update task from the list
  const handleTaskUpdate = (taskId, taskDesc) => {
    setTaskList(
      taskList.map((task) => {
        // check if its a duplicate task or not
        if (taskList.find((task) => task.taskDesc === taskDesc)) return task;
        if (task.id === taskId) {
          task.taskDesc = taskDesc;
        }
        closeModal();
        return task;
      })
    );
  };

  useEffect(() => {
    setTempTaskList(taskList.filter((task) => task.taskDesc.includes(debouncedSearchTerm)));
  }, [debouncedSearchTerm, taskList]);

  // set current page to 1 when task list is filter by debouncedSearchTerm
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  return (
    <div className="todo-main-container">
      <Header text="TODO" />

      <AddTaskInput
        className="add-task-input"
        placeholder="Add a task"
        img={ICON_ADD_PNG}
        alt="add-img"
        handleAddTask={handleTaskAdd}
        showImg
      />
      <CustomInput
        className="d-flex justify-center debouncedSearchTerm-task-input"
        placeholder="Search a task"
        value={searchTerm}
        onChange={(searchVal) => setSearchTerm(searchVal)}
      />

      {/* Task list container which will contain all the task list and pagination */}
      <TaskListContainer
        currentPage={currentPage}
        tempTaskList={tempTaskList}
        setCurrentPage={setCurrentPage}
        handleTaskDelete={handleTaskDelete}
        openModal={openModal}
        setTempTaskList={setTempTaskList}
      />

      {/* Edit task modal */}
      <EditTaskModal
        updatedTaskDesc={updatedTaskDesc}
        showModal={showModal}
        closeModal={closeModal}
        setUpdateTaskDesc={setUpdateTaskDesc}
        handleTaskUpdate={handleTaskUpdate}
      />
    </div>
  );
};

export default ToDoList;
