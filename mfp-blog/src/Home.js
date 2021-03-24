import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { NamesContext } from "./NamesContext";
const Home = () => {
	const [names, setNames] = useState([]);
	const [user, setUser] = useContext(NamesContext);
	const [loading, setLoading] = useState(false);
	const [loggedin, setLoggedin]=useState(true);
	// console.log(user);
	useEffect(() => {
		setLoading(true);
		fetch("/home", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ user }),
		})
			.then((res) => res.json())
			.then((result) => {
				setLoading(false);
				// console.log(result);
				if (result.error) {
					// console.log("error found");
					setLoggedin(false);
					// return <Redirect to="/Login" />;
				}
				setNames(result);
			})
			.catch((err) => console.log(err));
	}, []);
	// console.log(names, loading);
	if(!loggedin)
	return <Redirect to='/Login'/>
	return (
		<>
			<h1>Home Page</h1>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				names.map(
					(name, id) => <h1 key={id}>User No. {id+1}: {name}</h1>
					// console.log(name)
				)
				// <h1>{names.length}</h1>
			)}
		</>
	);
};

export default Home;
