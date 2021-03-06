const express = require('express');
const { expressShield } = require('node-shield');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressShield({
  errorHandler: (shieldError, req, res, next) => {
    console.error(shieldError);
    res.sendStatus(400);
  },
}));

app.listen(3000);
