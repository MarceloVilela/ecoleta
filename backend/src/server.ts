import express from 'express'
import cors from 'cors'
import path from 'path'
import { errors } from 'celebrate'

require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

import routes from './routes'

const app = express();

app.use(express.json())

app.use(cors())

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(process.env.APP_PORT)