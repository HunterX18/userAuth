import { useEffect, useState, useContext } from "react";
import { BooksContext } from "./BooksContext";
const Login = () => {
	const [name, setName] = useContext(BooksContext);
	
	// const [user, setUser] = useContext(BooksContext);
	const [info, setInfo] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setName(e.target.name.value);
	};

	useEffect(() => {
		fetch("/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// "Accept": "application/json"
			},
			body: JSON.stringify({
				name,
			}),
		})
			.then((res) => res.json())
			.then((result) => setInfo(result))
			.catch((err) => console.log("error", err));
	}, [name]);

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input placeholder="Enter your name" name="name" />
				<button type="submit">Submit</button>
			</form>
			{info.length && info.map((inf) => <h1>{inf}</h1>)}
		</>
	);
};

export default Login;
