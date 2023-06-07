const express = require("express");
const app = express();
const PORT = 3001;

let notes = [
  {
    names: "obet",
    age: 37,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/notes", (request, response) => {
  response.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
