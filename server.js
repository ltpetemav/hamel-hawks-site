import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const DIST = path.join(__dirname, 'dist');

app.get('/healthz', (_req, res) => res.status(200).send('ok'));

app.use(
  express.static(DIST, {
    extensions: ['html'],
    maxAge: '1h',
  })
);

app.get('*', (_req, res) => {
  res.status(404).sendFile(path.join(DIST, '404.html'), (err) => {
    if (err) res.status(404).send('Not Found');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Hamel Hawks site serving dist/ on port ${PORT}`);
});
