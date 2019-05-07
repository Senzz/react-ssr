import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../src/App'
import fs from 'fs'
import path from 'path'

const handleRender = async ctx => {
  const res = ctx.res;
  const { url } = ctx;
  res.writeHead(200);
  console.log('url', url)
  const indexHTML = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf8');

  const indexHTMLArr = indexHTML.split('<div id="root"></div>');
  res.write(indexHTMLArr[0] + '<div id="root">');
  // This context object contains the results of the render
  const context = {};

  // const stream = renderToNodeStream(
  //   <StaticRouter location={url} context={context}>
  //     <App />
  //   </StaticRouter>
  // )
  // stream.pipe(res, { end: false });

  // stream.on('end', () => {
  //   res.write('</div>' + indexHTMLArr[1]);
  //   res.end();
  // })
}

export default handleRender