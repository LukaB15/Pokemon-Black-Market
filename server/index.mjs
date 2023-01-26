import express from "express";
import cors from "cors";


const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message : "Hello from server!" });
});

app.post("/sell", (req, res) =>{
  console.log("route sell");
  console.log(req.body.qty);
  res.end();
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});