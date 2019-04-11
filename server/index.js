const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
require("dotenv").config();

mongoose.connect(process.env.mongodburi, {useNewUrlParser: true})

const MaxEffortRoutes = require("./routes/MaxEffortRoutes");
const PyramidRoutes = require("./routes/PyramidRoutes");
const GripSwitchRoutes = require("./routes/GripSwitchRoutes");
const MaxDayRoutes = require("./routes/MaxDayRoutes");
const PushUpRoutes = require("./routes/PushUpRoutes");

//to allow fetch calls to localhost:3000
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(MaxEffortRoutes);
app.use(PyramidRoutes);
app.use(GripSwitchRoutes);
app.use(MaxDayRoutes);
app.use(PushUpRoutes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });


