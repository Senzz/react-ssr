import Koa from 'koa2'
import Router from 'koa-router'
import path from 'path'
import koaStatic from 'koa-static'
import handleRender from './handleRender'
const app = new Koa();
const router = new Router();

/**
 * 设置首页，静态文件，其他routes
 */
// 设置首页
router.get('/', handleRender)
app.use(router.routes()).use(router.allowedMethods())

// 静态文件
app.use(koaStatic(
  path.join(__dirname, '../build')
))
// 其他routes
app.use(handleRender);

app.listen(3010, () => {
  console.log('server listen 3010')
})