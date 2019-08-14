const app = require('./app')
const db = require('./models/index')
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Application running on port ${port}.`)
    db.sequelize.sync();
})