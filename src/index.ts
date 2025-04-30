import express, { Request, Response } from 'express';
const app = express();
const port = 3001;
app.use(express.json());

interface NameRequestBody {
  name: string;
}
type NameRequest = Request<{}, {}, NameRequestBody>;

app.get('/', (req: Request, res: Response) => {
    const figurineData = {
      "name": "Venom",
      "brand": "Hot Toys",
      "series": "Marvel",
      "character": "Eddie Brock",
      "type": "Action figure",
      "condition": "Mint",
      "tags": "Let There Be Carnage",
      "photo": null,
      "edition": "Special"
    };
    
    res.json(figurineData);
  });

app.post('/submit', (req: NameRequest, res: Response) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
