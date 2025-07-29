// mock/server.js
import express from 'express';
const app = express();
app.use(express.json());

let idCounter = 1;

app.post('/api/user-subscriptions', (req, res) => {
  console.log('Mock assign:', req.body);
  res.json({ subscriptionId: `sub-${idCounter++}` });
});

app.delete('/api/user-subscriptions/:id', (req, res) => {
  console.log('Mock delete:', req.params.id);
  res.sendStatus(204);
});

app.listen(4000, () => console.log('✅ Mock API running on http://localhost:4000'));
