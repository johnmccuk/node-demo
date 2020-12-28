const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//const hostname = process.env.HOST || '127.0.0.1'
const port = process.env.PORT

/* Routes */
app.use('/admin/', require('./routes/admin'));
app.use(require('./routes/default'));


app.listen(port, () => {
    console.log('Express started on port ' + port)
})
