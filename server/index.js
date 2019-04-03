const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')

// Set Koa
const app = new Koa()
const router  = new Router()


router.get('/api/hello/', (ctx) => {
  ctx.body = 'Hello World!'
})

app.use(logger())
app.use(bodyParser())
app.use(router.routes())
app.use(serve('dist'))
app.listen(8000)
