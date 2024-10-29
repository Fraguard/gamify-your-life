import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/goals', (req: Request, res: Response) => {
  const goals = [
    { id: 1, title: 'Esercizio fisico', completed: false },
    { id: 2, title: 'Leggere un libro', completed: false },
  ];
  res.json(goals);
});

app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
