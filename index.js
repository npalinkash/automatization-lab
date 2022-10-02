const app = require('./app')

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.debug(`App listen on port: ${PORT}`)
})