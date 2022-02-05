import './message.css';

export const Message = ({text, author, date}) => {
  return (
    <div className="message">
      <h2 className="message__autor">{author}</h2>
      <p className="message__text">{text}</p>
      <p className="message__date">{date}</p>
    </div>
  );
};