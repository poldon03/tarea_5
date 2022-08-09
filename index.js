const express = require('express');
const router = require('./src/routes')
const firebase = require('./src/firebase')
const app = express()


app.set('PORT', process.env.PORT || 5000)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
     router()
)


firebase()


app.listen(app.get('PORT'), () => {
     console.log('The server is Running')
})