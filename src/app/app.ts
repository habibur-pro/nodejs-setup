import express from 'express'
import cors from 'cors'
import globalErrorHandler from './helpers/globalErrorHandler'
import handleNotFound from './helpers/handleNotFound'

const app = express()
app.use(cors())
app.use(handleNotFound)
app.use(globalErrorHandler)

export default app
