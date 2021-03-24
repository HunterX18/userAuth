const express = require("express");
const app = express();

const port = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

let names = [];

const requireLogin = (req, res, next) => {
	// console.log('here', req.body.user);
	const user = req.body.user;
	let found = 0;
	names.forEach((name) => {
		if (name == user) found = 1;
	});
	if (!found) res.json({ error: "Login" });
	// console.log(names);
	next();
};

app.post("/login", (req, res) => {
	let found = 0;
	names.forEach((name) => {
		if (name == req.body.user) found = 1;
	});
	if (found) res.json("Name exists");
	else {
		if (req.body.user !== "") {
			// names.push(req.body.user);
			names[names.length] = req.body.user;
		}
	}
	// console.log(names);
	res.redirect(307, "/home");
});

app.post("/home", requireLogin, (req, res) => {
	res.json(names);
});

app.post("/auth", requireLogin, (req, res) => {
	res.json({ mssg: "Successfull" });
});

app.listen(port, () => console.log("listening to port 5000"));
