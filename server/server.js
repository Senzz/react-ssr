import express from 'express';
import compression from 'compression';
import path from 'path'
import handleRender from './handleRender'

const app = express();
const PORT = 3010;

const router = express.Router();
app.use(compression());
app.use(router)

/**
 * 首页、静态文件、其他routes
 */
// 首页
router.get('/', handleRender)
// 静态文件
app.use(express.static(path.resolve(__dirname, '../build')));
// 其他routes
app.use(handleRender);

app.listen(PORT, () => {
  console.log(`server listen ${PORT}`)
})