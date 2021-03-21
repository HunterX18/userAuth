import { useContext } from "react";
import { BooksContext } from "./BooksContext";

const Create = () => {
	const [state, dispatch] = useContext(BooksContext);
	const handleSubmit = (e) => {
        e.preventDefault();
		dispatch({
			type: "Create",
			title: e.target.title.value,
			author: e.target.author.value,
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="title" name="title" />
				<input type="text" placeholder="author" name="author" />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Create;
