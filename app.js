const express = require('express')
const app = express()

// Routes
app.use('/admin/', require('./routes/admin'));
app.use(require('./routes/default'));

// server
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const hostname = process.env.HOST || '127.0.0.1'
const port = process.env.PORT

app.listen(port, hostname, () => {
    console.log(`Express started ${hostname} on port ${port}`)
})
