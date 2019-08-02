/* <== IMPORTS ==> */
const express = require(`express`);
const { logger } = require(`./middleware/logger.js`);
const userRouter = require(`./routers/userRouter.js`);
const postRouter = require(`./routers/postRouter.js`);

/* <== DECLARATIONS ==> */
const server = express();

/* <== USE MIDDLEWARE ==> */
server.use(express.json());
server.use(logger);
server.use(`/api/users`, userRouter);
server.use(`/api/posts`, postRouter);

/* <== GENERIC ROUTE HANDLERS ==> */
server.get('/', (request, response) => {
  response.send(`
      <h1>Web API III Challenge</h1>
      <p>Please see the <a href='https://github.com/ericlugo/webapi-iii-challenge'>README</a> for more information on where to go!</p>
    `);
});

server.get('/api', (request, response) => {
  response.send(`
      <h1>Looking for API Information?</h1>
      <p>Please see the <a href='https://github.com/ericlugo/webapi-iii-challenge'>README</a> for more information on where to go!</p>
    `);
});

module.exports = server;
