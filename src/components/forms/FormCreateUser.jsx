import { PropTypes } from "prop-types";
import { useRef } from "react";
import styles from "./FormCreateUser.module.css";

const FormCreateUser = ({addUser, hideForm}) => {

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
		<form onSubmit={add} className={styles.formCreateUser}>
			<fieldset className= {styles.fieldsetCreateUser}>
				<legend>Introduce Nuevo Usuario</legend>

				<div className= {styles.newUserData}>
					<label htmlFor= "userName">Nombre</label>
					<input type= "text" placeholder= "Ej: Pedro Martín Luján" id= "userName" ref= {inputRef} required></input>
					<label htmlFor= "setStatus">Estado</label>
					<select id="setStatus" name="setConnection" ref= {selectRef}>
						<option value= "true">Conectado</option>
						<option value= "false">Desconectado</option>
					</select>
				</div>

				<button type="submit" className= {styles.btnConfirm}>Confirmar</button>

			</fieldset>
		</form>
	);

};

FormCreateUser.propTypes = {
	addUser : PropTypes.func.isRequired,
	hideForm: PropTypes.func.isRequired
};

export default FormCreateUser;