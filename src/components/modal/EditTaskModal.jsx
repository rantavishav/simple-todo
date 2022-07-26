import Modal from '.';
import { ICON_ADD_PNG } from '../../assests/images';
import { CustomInput } from '../input';

const EditTaskModal = ({
  updatedTaskDesc = '',
  showModal = () => {},
  closeModal = () => {},
  setUpdateTaskDesc = () => {},
  handleTaskUpdate = () => {}
}) => {
  return (
    <Modal isShowing={showModal.isShow} closeModal={closeModal}>
      <div className="d-flex flex-column justify-center align-items-center">
        <CustomInput
          className="add-task-input"
          placeholder="Add a task"
          img={ICON_ADD_PNG}
          alt="add-img"
          value={updatedTaskDesc}
          onChange={(taskDesc) => setUpdateTaskDesc(taskDesc)}
        />

        <div className="w-50 d-flex justify-center ">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (updatedTaskDesc) {
                handleTaskUpdate(showModal.id, updatedTaskDesc);
              }
            }}>
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
