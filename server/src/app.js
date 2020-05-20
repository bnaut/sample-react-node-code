const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const MAX_INPUT = 1000000000; // Maximum input (Max: 1000000000)
const primes = require('./utils/computePrimes')(MAX_INPUT);
const search = require('./utils/search');

const matchParamRegex = /^[0-9]+$/;
const validator = (req, res, next) => {
  if (!matchParamRegex.test(req.params.input)) {
    res.sendStatus(400);
    return;
  } 
  if (Number(req.params.input) > MAX_INPUT) {
    res.status(400).send('Number too large');
    return;
  }
  if (Number(req.params.input) < 3) {
    res.send([]);
    return;
  }
  next();
}

const controller = (req, res) => {
  console.time('sieve')
  const max = req.params.input;
  const endIndex = max > primes[primes.length-1] ? 
    primes.length : 
    search(primes, max) + 1;
  const medians = endIndex % 2 === 0 ? 
    [primes[endIndex / 2 - 1], primes[endIndex / 2]] :
    [primes[Math.floor(endIndex / 2)]];
  console.timeEnd('sieve')
  res.send(medians);
}

app.get('/:input', validator, controller);

module.exports = {
  matchParamRegex,
  validator,
  controller,
  app,
};