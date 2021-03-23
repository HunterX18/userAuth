const BooksReducer = (state, action) => {
	// console.log(action.type);
	switch (action.type) {
		case "read":
			return state.map((x) => {
				if (x.title == action.title) return { ...x, read: !x.read };
				return x;
			});
		case "Create":
			return [
				...state,
				{ title: action.title, author: action.author, read: false },
			];
		case "remove":
			return state.filter((ind) => ind.title != action.title);
		default:
			return state;
	}
};

export default BooksReducer;
