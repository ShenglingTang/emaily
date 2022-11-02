const express = require('express');
const app = express();
const port =  process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(port);
