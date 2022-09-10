const app = require('./app')

const PORT = process.env.PORT || 3333

app.listen(PORT)
app.on("listening", () => {
    console.log(`Listen on ${PORT}`)
})