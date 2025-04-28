import express, { Request, Response } from 'express';
const app = express();
const port = 3001;
app.use(express.json());
interface NameRequestBody {
  name: string;
}
type NameRequest = Request<{}, {}, NameRequestBody>;
app.post('/submit', (req: NameRequest, res: Response) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

