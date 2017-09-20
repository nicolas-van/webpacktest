const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(require('koa-file-server')({
    root: "./dist",
    index: true,
}));

router.get('/testapi', function (ctx, next) {
    ctx.body = "test";
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
