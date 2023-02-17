import { useState } from "react";
import FormCreateUser from "./forms/FormCreateUser";
import User from "./pure/User";

const UserList = () => {

	const deafultUser1 = {
		name: "Arturo López Rosa",
		isConnected: true
	};

	const defaultUser2 = {
		name: "Jorge Navarro Arias",
		isConnected: false
	};

	const [usersList, setUsersList] = useState([deafultUser1, defaultUser2]); 

	// Función que genera la lista de usuarios:
	function getUsers () {
		
		let users = []; 
				
		usersList.forEach(element => {
			
			users.push(<User name= {element.name} isConnected= {element.isConnected} key= {element.name} changeConnectionStatus= {changeConnectionStatus} />);
			
		});

		return users;
	}

	//Función que cambia el estado de un usuario
	function changeConnectionStatus (name) {

		const usersListCopy = structuredClone(usersList);

		usersListCopy.forEach((element) => {
			if (element.name === name) {
				element.isConnected = !element.isConnected;
			}
			setUsersList(usersListCopy);
		});

	}
	

	return (
		<div>
			<h1>Lista de Usuarios</h1>

			<div>
				{getUsers()}
			</div>

			<div>
				<button type='button'>Crear Usuario</button>
			</div>

			<div>
				<FormCreateUser />
			</div>

		</div>
	);
};

export default UserList;