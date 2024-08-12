import express from 'express';
import fs from 'fs';
import path from 'path';
import { render } from './src/entry-server.js';

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  const appHtml = render();
  const html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
    .replace('<!--app-->', appHtml);

  res.status(200).setHeader('Content-Type', 'text/html').end(html);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});