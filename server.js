const Koa = require('koa');
const Router = require('koa-trie-router')
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(serve("./dist"));

router.get('/testapi', async function (ctx, next) {
    ctx.body = "test";
});

app
    .use(router.middleware());

app.listen(3000);
