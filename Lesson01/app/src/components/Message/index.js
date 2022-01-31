import './message.css';

export const Message = ({text, onTextClick}) => {
  return (
  <h3 className="greeting">Здравствуйте, <span className="tag-name" onClick={onTextClick}>{text}</span>.</h3>
  );
};