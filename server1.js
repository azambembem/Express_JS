// opshi Middlewarelar
const express = require("express");
const app = express();
const morgan = require("morgan");

// 1. 내장 미들웨어
app.use(express.json()); // JSON 본문 파싱

// 2. 서드파티 미들웨어
app.use(morgan("dev")); // 요청 로깅

// 3. 애플리케이션 레벨 미들웨어
app.use((req, res, next) => {
  console.log("Custom middleware");
  next(); // 다음 미들웨어로 넘어감
});

// 4. 라우터 레벨 미들웨어
app.get("/test", (req, res, next) => {
  res.send("Middleware Test");
});

// 5. 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Server Error");
});

app.listen(3000, () => console.log("Server running on port 3000"));
