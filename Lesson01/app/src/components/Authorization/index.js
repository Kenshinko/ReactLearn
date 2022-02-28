import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logIn, signUp } from "../../services/firebase";

import './authorization.css';


export const Authorization = ({ isSignUp }) => {
  const data = useSelector((state) => state.profile);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPass(event.target.value);
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, pass);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await logIn(email, pass);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }

    setEmail("");
    setPass("");
  };

  return (
    <div className="signup">
      <h1 className="signup__title" style={{ color: data.color }}>{isSignUp ? "Регистрация" : "Авторизация"}</h1>
      <Link to={`${isSignUp ? "/" : "/signup"}`}>
        {!isSignUp ? "Регистрация" : "Авторизация"}
      </Link>
      <form className="signup__form" onSubmit={handleSubmit}>
        <input className="signup__field" type="text" value={email} onChange={handleChangeEmail} />
        <input className="signup__field" type="password" value={pass} onChange={handleChangePass} />
        <button className="signup__btn">LOGIN</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};