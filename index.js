require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 7000;

server.listen(port, () => console.log(`server is listening on port ${port} **\n`))