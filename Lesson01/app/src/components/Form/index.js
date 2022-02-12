import { useState, useRef, useEffect } from "react";
import './form.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const textField = useRef('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value) return;
    onSubmit(value);
    setValue('');
  }

  useEffect(() => {
    textField.current.focus();
  }, []);

  return <form className="typeform" onSubmit={handleSubmit}>
          <TextField className="typeform__input"
                     id="outlined-basic"
                     label="Напишите что-нибудь"
                     variant="outlined"
                     size="small"
                     type="text"
                     value={value}
                     onChange={handleChange}
                     inputRef={textField}
          />
          <Button className="typeform__submit"
                  endIcon={<SendIcon />}
                  variant="contained"
                  size="small"
                  type="submit">
          </Button>
         </form>;
};