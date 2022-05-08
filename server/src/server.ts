import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

const port = 3000

// o cors permite que a conexão entre frontend e backend exista
// nesse caso está aberto para todas rotas de frontend, mas existem configurações para restringir acesso
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`server running in localhost:${port}`))
