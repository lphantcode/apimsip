const express = require('express');
const app = express();
const path = require('path');
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

const morgan = require('morgan');
const bodyParser = require('body-parser');
// settings
app.set('port', process.env.PORT || 3000 );

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


// routers
require('./routes/QuotationMockUpRoutes')(app);

app.listen(app.get('port'), () => {
   console.log('server on port 3000');
});
