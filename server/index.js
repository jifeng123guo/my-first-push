import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// 提供静态文件（前端HTML、CSS、JS）
app.use(express.static(path.join(__dirname, "..")));

app.get("/api/hello", (req, res) => {
  res.json({ msg: "后端已连接" });
});

app.listen(3000, () => {
  console.log("服务器运行在 http://localhost:3000");
  console.log("前端页面: http://localhost:3000/index.html");
});
