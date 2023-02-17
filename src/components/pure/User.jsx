import PropTypes from "prop-types";

const User = ({ name, isConnected, changeConnectionStatus }) => {

	// Devuelve el icono Bootstrap correcto on/off
	function getConnectIcon () {
		if (isConnected) {
			return "bi bi-toggle-on";
		} else {
			return "bi bi-toggle-off";
		}
	}

	return (
		<div>
			<p> {name} </p>
			<div>
				<i className= {getConnectIcon()} onClick={() => changeConnectionStatus(name)}></i>
				<i className="bi bi-trash"></i>
			</div>
		</div>
	);
};

User.propTypes = {
	name: PropTypes.string.isRequired,
	isConnected: PropTypes.bool.isRequired,
	changeConnectionStatus: PropTypes.func.isRequired
};

export default User;