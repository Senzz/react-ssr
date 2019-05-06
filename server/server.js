import Koa from 'koa2'
import Router from 'koa-router'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import App from '../src/App'
import fs from 'fs'
import path from 'path'
import koaStatic from 'koa-static'

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  const res = ctx.res;
  res.writeHead(200)
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

app.use(router.routes()).use(router.allowedMethods())
app.use(koaStatic(
  path.join(__dirname, '../build')
))
app.listen(3010, () => {
  console.log('server listen 3010')
})