import { Fragment, useMemo } from 'react';
import Pagination from '../pagination';
import TaskItem from '../taskItem';

const TaskListContainer = ({
  currentPage = 1,
  tempTaskList = [],
  setCurrentPage = () => {},
  handleTaskDelete = () => {},
  openModal = () => {},
  setTempTaskList = () => {}
}) => {
  const PageSize = 2;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tempTaskList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, tempTaskList]);

  return (
    <div className="todo-list-container">
      {currentTableData?.map((task) => (
        <Fragment key={task.id}>
          <TaskItem
            taskDesc={task.taskDesc}
            isCompleted={task.isCompleted}
            onClickCross={() => handleTaskDelete(task.id)}
            openModal={() => openModal(task.taskDesc, task.id)}
            handleTaskCheckbox={() =>
              setTempTaskList(
                tempTaskList.map((_task) => {
                  if (_task.id === task.id) {
                    _task.isCompleted = !_task.isCompleted;
                  }
                  return _task;
                })
              )
            }
          />
        </Fragment>
      ))}

      {/* Pagination */}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={tempTaskList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default TaskListContainer;
