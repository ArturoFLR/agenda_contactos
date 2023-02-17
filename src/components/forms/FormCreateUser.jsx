
const FormCreateUser = () => {


	return (
		<form>
			<fieldset>
				<legend>Introduce Nuevo Usuario</legend>
				<input type="text" placeholder="Ej: Pedro Martín Luján" required></input>
				<button type="submit">Confirmar</button>
			</fieldset>
		</form>
	);

};

export default FormCreateUser;