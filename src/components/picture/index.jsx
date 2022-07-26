import './index.css';

const Picture = ({ img, className = '', alt = '' }) => (
  <picture className={className}>
    <source srcSet={img} />
    <img src={img} alt={alt} className="picture-comp-img" />
  </picture>
);

export default Picture;
