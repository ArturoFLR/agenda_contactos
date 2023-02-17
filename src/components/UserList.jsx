import { useState } from "react";
import FormCreateUser from "./forms/FormCreateUser";
import User from "./pure/User";

const UserList = () => {

	let deafultUser1 = {
		name: "Arturo López Rosa",
		isConnected: true
	};

	let defaultUser2 = {
		name: "Jorge Navarro Arias",
		isConnected: false
	};

	const [usersList, setUsersNumber] = useState([deafultUser1, defaultUser2]); 

	// Función que genera la lista de usuarios:
	function getUsers () {
		
		let users = []; 
		let key =
		
		usersList.forEach(element => {
			console.log(`<User name = ${element.name} isConnected = ${element.isConnected} />`);
			users.push(<User name= {element.name} isConnected= {element.isConnected} key= {element.name} />);
			
		});

		return users;
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