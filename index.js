import bodyParser from 'body-parser'
import Sequelize from 'sequelize';
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

import routes from './src/routes/routes.js'

const app = express()
const PORT = 5000




//mysql connection
// const connection = mysql.createConnection({
//     'user': 'root',
//     'password': 'root',
//     'host': 'localhost',
//     'port': 8889,
//     'database': 'test',
//     'raise_on_warnings': true
// })
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to mysql!')
// })

// connection.query(
//     "CREATE TABLE IF NOT EXISTS movie2 (id INT, title VARCHAR(255), producer VARCHAR(20), year DATE);"
// )
const sequelize = new Sequelize('atmo', 'devuser', '@tmoBlue1?', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

try {
    await sequelize.authenticate();
    console.log("Connection established successfully.")
} catch (error) {
    console.error("Unable to connect to database: ", error)
}

app.use(cors());

// global controller
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // http://expressjs.com/guide.html#passing-route control
});

routes(app)

app.get('/', (req, res) => res.send(`node and express server running on port: ${PORT}`))

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
