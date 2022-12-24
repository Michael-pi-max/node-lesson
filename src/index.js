const express = require("express");

const app = express();

app.use(express.json());

const port = 3000;

// Routes
app.post("/data", (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "Success !", data: { body: req.body } });
});

app.get("/", (req, res) =>
  res
    .status(200)
    .json({ message: "Hello from the server !", app: "Express-Routes" })
);

app.get("*", (req, res) =>
  res
    .status(404)
    .json({ message: "Route does not exist", app: "Express-Routes" })
);

app.listen(port, () =>
  console.log(`Server is up and running on port ${port}!`)
);
