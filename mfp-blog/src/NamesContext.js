import { createContext, useState } from "react";

export const NamesContext = createContext();

export const NamesProvider = ({ children }) => {
	const [user, setUser] = useState("");
	return (
		<NamesContext.Provider value={[user, setUser]}>
			{children}
		</NamesContext.Provider>
	);
};
