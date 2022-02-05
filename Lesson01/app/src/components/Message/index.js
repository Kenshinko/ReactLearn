import './message.css';

export const Message = (message) => {
  return (
    <div key={message.id} className="message">
      <h2 className="message__autor">{message.author}</h2>
      <p className="message__text">{message.text}</p>
      <p className="message__date">{message.date}</p>
    </div>
  );
};