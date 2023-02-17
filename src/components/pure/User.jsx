import PropTypes from "prop-types";
import { useState } from "react";

const User = ({ name, isConnected }) => {

	const [connected, setConnection] = useState(isConnected);

	// Devuelve el icono Bootstrap correcto on/off
	function getConnectIcon () {
		if (connected) {
			return "bi bi-toggle-on";
		} else {
			return "bi bi-toggle-off";
		}
	}

	function changeConnectionStatus () {
		setConnection(!connected);
	}

	return (
		<div>
			<p> {name} </p>
			<div>
				<i className= {getConnectIcon()} onClick={changeConnectionStatus}></i>
				<i className="bi bi-trash"></i>
			</div>
		</div>
	);
};

User.propTypes = {
	name: PropTypes.string,
	isConnected: PropTypes.bool
};

export default User;