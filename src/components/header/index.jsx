import './index.css';

const Header = ({ text = '' }) => {
  return (
    <div className="todo-header">
      <h1 className="todo-header-title">{text} </h1>
    </div>
  );
};

export default Header;
