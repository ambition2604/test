const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const user = require('./router/api/UserController');

app.use('/api/user',user);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to booking-DD." });
  });
  

app.use(function(req, res, next) {
    next(createError(404));
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on post ${port}`));