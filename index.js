const express = require('express')
const app = express()
const https = require('https');
const fs = require ('fs');
const cors = require('cors');
const enforceHttps = require('express-http-to-https').redirectToHTTPS;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views',);
const { name, description, invite, support, pfp, feature1, feature2, feature3, feature4, port } = require("./config.json")
const server = https.createServer({
    cert: fs.readFileSync('fullchain.pem'),
    key: fs.readFileSync('privkey.pem')
  }, app);

server.listen(port, () => {
    console.log(`Website is working securely on port ${port}`);
  });
app.use(express.static("assets"));
app.use(enforceHttps({
    statusCode: 301
  }));
app.use(cors());

app.get('/', (req, res) => {
        res.render("index", {name: name, description: description, invite: invite, support: support, pfp: pfp, f1: feature1, f2: feature2, f3: feature3, f4: feature4});
});

app.get('/privacy', (req, res) => {
  res.render("privacy", {name: name, description: description, invite: invite, support: support, pfp: pfp, f1: feature1, f2: feature2, f3: feature3, f4: feature4});
});
app.get('/terms', (req, res) => {
    res.render("tos", {name: name, description: description, invite: invite, support: support, pfp: pfp, f1: feature1, f2: feature2, f3: feature3, f4: feature4});
});

app.get('/discord', async (req, res) => {
    res.redirect(support)
});

app.get('/server', async (req, res) => {
    res.redirect(support)
});