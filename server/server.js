import express from 'express';
import compression from 'compression';
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import App from '../src/App'
import fs from 'fs'
import path from 'path'

const app = express();
const PORT = 3010;

const router = express.Router();
app.use(compression());
app.use(router)
router.get('/', (req, res) => {
  console.log(req.url)
  const indexHTML = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8'); 

  const indexHTMLArr = indexHTML.split('<div id="root"></div>');
  res.write(indexHTMLArr[0] + '<div id="root">');
  const stream = renderToNodeStream(<App />)
  stream.pipe(res, { end: false });

  stream.on('end', () => {
    res.write('</div>' + indexHTMLArr[1])
    res.end();
  })
})

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(PORT, () => {
  console.log(`server listen ${PORT}`)
})