import { useState } from "react";
import './form.css';

export const Form = ({ onSubmit, onClick }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value) return;
    onSubmit({text: value, author: 'user', date: new Date().toLocaleTimeString()});
  }

  const handleClick = () => {
    onClick();
  }

  return <form className="typeform" onSubmit={handleSubmit}>
          <input className="typeform__input" value={value} onChange={handleChange} type="text" />
          <input className="typeform__submit" type="submit" onClick={handleClick} value="Отправить" />
         </form>;
};