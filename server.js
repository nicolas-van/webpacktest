const Koa = require('koa');
const Router = require('koa-trie-router')

const app = new Koa();
const router = new Router();

app.use(require('koa-file-server')({
    root: "./dist",
    index: true,
}));

router.get('/testapi', async function (ctx, next) {
    ctx.body = "test";
});

app
    .use(router.middleware());

app.listen(3000);
