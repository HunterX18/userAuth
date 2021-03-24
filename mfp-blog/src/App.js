import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NamesProvider } from "./NamesContext";
import Login from "./Login";
import Home from "./Home";
import Authorised from "./Authorised";
import Navbar from "./Navbar";
function App() {
	return (
		<Router>
			<NamesProvider>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/Login">
						<Login />
					</Route>
					<Route exact path="/Auth">
						<Authorised />
					</Route>
				</Switch>
			</NamesProvider>
		</Router>
	);
}

export default App;
