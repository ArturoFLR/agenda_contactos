import PropTypes from "prop-types";
import styles from "./User.module.css";

const User = ({ name, isConnected, changeConnectionStatus, eraseUser }) => {

	// Devuelve el icono Bootstrap correcto on/off
	function getConnectIcon () {
		if (isConnected) {
			return "bi bi-toggle-on";
		} else {
			return "bi bi-toggle-off";
		}
	}

	return (
		<div className={styles.userContainer}>
			<p> {name} </p>
			<div>
				<i className= {getConnectIcon()} onClick={() => changeConnectionStatus(name)}></i>
				<i className="bi bi-trash" onClick={() => eraseUser(name)}></i>
			</div>
		</div>
	);
};

User.propTypes = {
	name: PropTypes.string.isRequired,
	isConnected: PropTypes.bool.isRequired,
	changeConnectionStatus: PropTypes.func.isRequired,
	eraseUser: PropTypes.func.isRequired
};

export default User;