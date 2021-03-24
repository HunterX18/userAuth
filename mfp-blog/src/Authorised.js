import { useContext, useState } from "react";
import { NamesContext } from "./NamesContext";
const Authorised = () => {
	const [user, setUser] = useContext(NamesContext);
	const [loggedin, setLoggedin] = useState(false);
	const [loading, setLoading] = useState(true);
	// console.log(user);
	fetch("/auth", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ user }),
	})
		.then((res) => res.json())
		.then((result) => {
			// console.log(result);
			if (result.mssg) setLoggedin(true);
			setLoading(false);
		})
		.catch((err) => console.log(err));

	if (loading) return <h1>Loading...</h1>;
	if (loggedin) return <h1>Hello {user}. You are logged in!</h1>;
	return <h1>You are not logged in!</h1>;
};

export default Authorised;
