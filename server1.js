// http://localhost:4000/users/1 yoki 0  orqali malumotlarni olishimiz mumkin.??
const express = require("express"); // Express module chaqirish

const PORT = 4000; // Express server uchun port 설정

const Users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }
];

const app = express(); // yangi Express app 생성

app.get("/users", (req, res) => {
  res.send(Users);
});
app.get("/", (req, res) => {
  // "/" 이 경로로 요청이 오면 Hello from Express!를 결과값으로 전달
  res.send("Hello from Express!");
});

app.get("/users/:usersId", (req, res) => {
  const userId = parseInt(req.params.usersId); // userni id sini oliyapti
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // PORT 4000ni chaqrib ishlatish.
});
