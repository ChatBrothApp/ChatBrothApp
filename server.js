import express from 'express'
import { createServer as createViteServer } from 'vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  // Usar carpeta dist después de construir
  app.use(express.static(resolve(__dirname, 'dist')))

  app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor iniciado')
  })
}

createServer()
