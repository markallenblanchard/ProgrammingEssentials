import express from 'express'

const app = express()
const PORT = 5000

app.get('/', (req, res) =>
    res.send(`node and express server running on port: ${PORT}`)
)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
