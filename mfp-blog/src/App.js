import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import Login from "./Login";
import { BooksProvider } from "./BooksContext";

function App() {
	// const [loggedin, setLoggedin]=useContext("BooksContext");
	return (
		<Router>
			<BooksProvider>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/register">
							<Login />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Create">
							<Create />
						</Route>
					</Switch>
				</div>
			</BooksProvider>
		</Router>
	);
}

export default App;
