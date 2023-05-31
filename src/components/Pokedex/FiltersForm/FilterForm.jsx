import { Form } from "react-router-dom";
import { useEffect, useState } from "react";
import "./FilterForm.css";
import { getAllTypes } from "../../../services/getAllTypes";
const FilterForm = ({ nameInitial, typeInitial }) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setNameValue] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial);

  useEffect(() => {
    const loadTypes = async () => {
      const allTypes = await getAllTypes();
      setTypes(allTypes);
    };
    loadTypes();
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNameValue(newValue);
  };

  const handleTypeChange = (e) => {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
    submitForm();
  };

  useEffect(() => {
    setNameValue(nameInitial);
    setTypeValue(typeInitial);
  }, [nameInitial, typeInitial]);

  return (
    <Form className="form">
      <div className="form_inputs-container">
        <div className="container_input">
          <button className="form__btn">Buscar</button>
          <input
            type="text"
            value={nameValue}
            onChange={handleChange}
            placeholder="Escribe el nombre de tu pokemon"
            name="pokemonName"
            className="form__input-name"
          />
        </div>

        <div>
          <select
            className="container_select"
            name="pokemonType"
            value={typeValue}
            onChange={handleTypeChange}
            id="searchType"
          >
            <option value="">All</option>
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          <button className="form__btn">Buscar por tipo</button>
        </div>
      </div>
    </Form>
  );
};

export default FilterForm;
