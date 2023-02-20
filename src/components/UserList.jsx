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
	const [visibility, setvisibility] = useState("hidden");

	// Función que genera la lista de usuarios:
	function getUsers () {
		
		let users = []; 
		
		usersList.map((element, index) => {
			
			users.push(<User 
				name= {element.name} 
				isConnected= {element.isConnected} 
				key= {index} 
				changeConnectionStatus= {changeConnectionStatus} 
				eraseUser= {eraseUser} 	
			/>);
		});

		return users;
	}

	//Función que cambia el estado de un usuario
	function changeConnectionStatus (name) {

		const usersListCopy = JSON.parse(JSON.stringify(usersList));

		usersListCopy.forEach((element) => {
			if (element.name === name) {
				element.isConnected = !element.isConnected;
			}
			setUsersList(usersListCopy);
		});

	}
	
	//Función que borra un usuario
	function eraseUser (name) {

		const usersListCopy = JSON.parse(JSON.stringify(usersList));

		usersListCopy.map((element, index) => {
			
			if (element.name === name) {
				console.log(usersListCopy);
				usersListCopy.splice(index, 1);
				console.log(usersListCopy);
			}
			
			setUsersList(usersListCopy);
		});
	}

	//Función que añade un usuario
	function addUser (newUser) {
		
		const usersListCopy = JSON.parse(JSON.stringify(usersList));

		usersListCopy.push(newUser);

		setUsersList(usersListCopy);
	}

	//Función que hace aparecer el formulario de creación de usuarios
	function showForm () {
		if (visibility === "hidden") {
			setvisibility("visible");
		}else {
			setvisibility("hidden");
		}

	}
	
	return (
		<div>
			<h1>Lista de Usuarios</h1>

			<div>
				{getUsers()}
			</div>

			<div>
				<button type='button' onClick= {showForm}>{visibility === "hidden" ? "Crear Usuario" : "Cancelar"}</button>
			</div>

			<div>
				<FormCreateUser addUser= {addUser} isVisible= {visibility} hideForm = {showForm} />
			</div>

		</div>
	);
};

export default UserList;