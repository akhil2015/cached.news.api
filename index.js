require('dotenv').config()
require('express-async-errors')

//express
const express = require('express')
const app = express()

//middleware
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const logger = require('./middleware/logger')
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
app.use(helmet());
app.use(cors({origin: '*'}))
app.use(xss());
app.use(express.json())

//custom middlewares

app.use(logger)

//caching support
const apicache = require("apicache");
let cache = apicache.middleware
app.use(cache('5 minutes'))
//routers
const newsRouter = require('./routes/news')
app.use('/api/v1/news', newsRouter)

//custom middlewares
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)
// start server
// const connectDB = require('./configs/dbConfig');
const port = process.env.PORT || 5555;
const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
}

start();