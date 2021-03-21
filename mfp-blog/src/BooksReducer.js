const BooksReducer = (state, action) => {
	// console.log(action.type);
	switch (action.type) {
		case "read":
			state.map((x) => {
				if (x.title == action.title) x.read = true;
			});
			return [...state];
		case "unread":
			state.map((x) => {
				if (x.title == action.title) x.read = false;
			});
			return [...state];
		case "Create":
			return [
				...state,
				{ title: action.title, author: action.author, read: false },
			];
		case "remove":
			// console.log("remove");
			return state.filter((ind) => ind.title != action.title);
		default:
			return state;
	}
};

export default BooksReducer;
