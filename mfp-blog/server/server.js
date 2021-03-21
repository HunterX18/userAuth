const express = require("express");
const app = express();

const port = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const names = [];

app.post("/players", (req, res) => {
	let found = false;
	if (req.body.name !== "") {
		names.forEach((name) => {
			if (name === req.body.name) {
				found = true;
				res.json(["Name exists"]);
			}
		});
		if (!found) {
			names.push(req.body.name);
			res.json(names);
		}
	}
});


app.get("/data", (req, res) => {
	const list = [{ name: "Hunterx", role: "Entry Fragger" }];
	res.json(list);
});

app.listen(port, () => console.log("listening to port 5000"));
