const express = require('express');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(cors());

app.use(express.json());

app.use(require('./controllers/router'));

app.use(require('./middlewares/error'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));