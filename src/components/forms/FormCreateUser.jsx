import { PropTypes } from "prop-types";
import { useRef } from "react";

const FormCreateUser = ({addUser, isVisible, hideForm}) => {

	const inputRef = useRef(null);
	const selectRef = useRef(null);
	
	function add (e) {
		e.preventDefault();

		const newUser = {
			name: inputRef.current.value,
			isConnected: selectRef.current.value === "true" ? true : false
		};

		inputRef.current.value = "";

		addUser(newUser);
		hideForm();
	}

	return (
		<form onSubmit={add} style= {{visibility: isVisible}}>
			<fieldset>
				<legend>Introduce Nuevo Usuario</legend>
				<input type= "text" placeholder= "Ej: Pedro Martín Luján" ref= {inputRef} required></input>
				<label htmlFor= "setStatus">Estado</label>
				<select id="setStatus" name="setConnection" ref= {selectRef}>
					<option value= "true">Conectado</option>
					<option value= "false">Desconectado</option>
				</select>
				<button type="submit">Confirmar</button>
			</fieldset>
		</form>
	);

};

FormCreateUser.propTypes = {
	addUser : PropTypes.func.isRequired,
	isVisible: PropTypes.string.isRequired,
	hideForm: PropTypes.func.isRequired
};

export default FormCreateUser;