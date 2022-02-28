import { useDispatch, useSelector } from 'react-redux';

import { CHANGE_COLOR } from '../../store/profile/actions';
import { logOut } from "../../services/firebase";

import './profile.css';

export const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile);

  const handleColorChange = (color) => {
    dispatch({
      type: CHANGE_COLOR,
      payload: color.target.id,
    });
  }

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="profile">
          <h1 className="profile__title" style={{ color: data.color }}>Профиль пользователя</h1>
          <form>
            <fieldset className="profile__discolor mixes">
              <legend className="mixes__title">Выберите цвет</legend>
              <ul className="mixes__colors">
                <li className="mixes__colors-red">
                  <input onChange={handleColorChange} type="radio" id="red" name="color" />
                  <label htmlFor="red" style={{ color: 'red' }}>Красный</label>
                </li>
                <li className="mixes__colors-yellow">
                  <input onChange={handleColorChange} type="radio" id="yellow" name="color" />
                  <label htmlFor="yellow" style={{ color: 'yellow' }}>Желтый</label>
                </li>
                <li className="mixes__colors-green">
                  <input onChange={handleColorChange} type="radio" id="green" name="color" />
                  <label htmlFor="green" style={{ color: 'green' }}>Зеленый</label>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
      <div>
        <button className="signup__btn" onClick={handleLogOut}>LOGOUT</button>
      </div>
      </header>
    </div>
  );
};