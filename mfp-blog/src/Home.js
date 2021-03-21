import { useContext, useEffect, useState } from "react";
import { BooksContext } from "./BooksContext";

const Home = () => {
	const [data, setData] = useState([{ name: "Smruti", role: "csgo" }]);
	const [loading, setLoading] = useState(false);
	const [state, dispatch] = useContext(BooksContext);
	const [name, setName] = useState("");
	const [info, setInfo] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch("/players", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				setLoading(false);
				setInfo(result);
			})
			.catch((err) => console.log("error", err));
	}, [name]);

	useEffect(() => {
		setLoading(true);
		fetch("/data")
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setLoading(false);
			})
			.catch((err) => 
			{
				console.log(err);
				console.log('here')
			});

	}, []);

	const handleRead = (ind) => {
		dispatch({ type: "read", title: ind.title });
	};
	const handleUnread = (ind) => {
		dispatch({ type: "unread", title: ind.title });
	};
	const handleRemove = (ind) => {
		dispatch({ type: "remove", title: ind.title });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setName(e.target.name.value);
	};
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<h1>Home Page</h1>

					{data.map((obj) => (
						<>
							<h1>{obj.name}</h1>
							<h2>{obj.role}</h2>
						</>
					))}

					<form onSubmit={(e) => handleSubmit(e)}>
						<input placeholder="Enter your name" name="name" />
						<button type="submit">Submit</button>
					</form>

					{info.map((data) => (
						<h1>{data}</h1>
					))}

					{state.map((ind) => {
						return (
							<>
								{ind.read ? (
									<>
										<h1 style={{ textDecoration: "line-through" }}>
											{ind.title}
										</h1>
										<h2>{ind.author}</h2>
										<button onClick={() => handleUnread(ind)}>Unread</button>
									</>
								) : (
									<>
										<h1>{ind.title}</h1>
										<h2>{ind.author}</h2>
										<button onClick={() => handleRead(ind)}>Read</button>
									</>
								)}
								<button onClick={() => handleRemove(ind)}>Remove</button>
							</>
						);
					})}
				</>
			)}
		</>
	);
};

export default Home;
