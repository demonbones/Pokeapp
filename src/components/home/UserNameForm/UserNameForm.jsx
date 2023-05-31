import { useRef, useState } from "react";
import "./UserNameForm.css";

const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const hasInputAlreadyTouched = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;

    if (!nameValue) setNameError("Debes ingresar tu nombre para continuar!");
    else if (/[^a-z]/i.test(nameValue))
      setNameError("El nombre solo deve contener letras");
    else if (!/^[a-z]{2,}?$/i.test(nameValue))
      setNameError("El nombre deve tener minimo 2");
    else setNameError("");

    setUserNameValue(nameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && hasInputAlreadyTouched.current) onSendName(userNameValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-name"
        type="text"
        placeholder="Tu nombre..."
        value={userNameValue}
        onChange={handleChange}
      />
      <button className="submit-name" type="submit">
        Comenzar
      </button>
      {Boolean(nameError) && <p className="error-form">{nameError}</p>}
    </form>
  );
};

export default UserNameForm;
