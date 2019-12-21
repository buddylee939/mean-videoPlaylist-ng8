const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const api = require('./server/routes/api');
const port = 3000;

const app = express();
express.static.mime.define({'text/html': ['js']});
app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/my-video-player/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
