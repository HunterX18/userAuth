import { createContext, useReducer, useState } from "react";
import BooksReducer from "./BooksReducer";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
	let bookList = [
		{ title: "Harry Potter", author: "JK Rowling", read: true },
		{ title: "Da Vinci Code", author: "Dan Brown", read: true },
	];
	// let list=[{number: 0, over: false},{number: 1, over: false}];
	const [state, dispatch] = useReducer(BooksReducer, bookList);
	const [name, setName] = useState("hello");
	return (
		<BooksContext.Provider value={[state, dispatch]}>
			{children}
		</BooksContext.Provider>
	);
};
