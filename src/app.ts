import express from "express";
import santriroutes from "./routes/santriroutes";

const app = express();

app.use(express.json());
app.use("/api", santriroutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
