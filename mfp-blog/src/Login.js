import { useContext, useEffect, useState } from "react";
import { NamesContext } from "./NamesContext";
import { Redirect } from "react-router-dom";
const Login = () => {
	const [user, setUser] = useContext(NamesContext);
	const [name, setName] = useState("");
	const [signup, setSignup] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser(name);
		// console.log(name);
		fetch("/login", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ user: name }),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				if (result !== "Name exists") setSignup(true);
			})
			.catch((err) => console.log(err));
	};

	if (signup) return <Redirect to="/" />;
	return (
		<>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<input value={name} onChange={(e) => setName(e.target.value)}></input>
			</form>
		</>
	);
};

export default Login;
