const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Authentication and User Management Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Team Management Routes
app.use('/api/teams', require('./routes/teams'));

// Match Management Routes
app.use('/api/matches', require('./routes/matches'));

// ELO Rating System Routes
app.use('/api/ratings', require('./routes/ratings'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
