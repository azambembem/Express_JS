// express js ni ishatish usuli  // server.js
const express = require("express"); // Express module chaqirish

const PORT = 4000; // Express server uchun port 설정

const app = express(); // yangi Express app 생성
app.get("/", (req, res) => {
  // "/" 이 경로로 요청이 오면 Hello from Express!를 결과값으로 전달
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // PORT 4000ni chaqrib ishlatish.
});
