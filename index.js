const express = require('express');
const Sequelize = require('sequelize');
const User = require('./models')
const app = express();

const sequelize = new Sequelize('database_name', 'username', 'password', {
  dialect: 'mysql',
});


// Connect to the database
sequelize.authenticate()
  .then(() => console.log('Connected to the database!'))
  .catch((error) => console.error('Error connecting to the database:', error));

// Create database tables (migrations)
sequelize.sync();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// APIs
app.post('/sign-up', async (req, res) => {
  const { username, ...userData } = req.body;
  const referralCode = `${username}-${genCode()}`;

  try {
    const createdUser = await User.create({
      ...userData,
      referralCode,
    });

    res.json(createdUser);
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
});

app.post('/sign-in', async (req, res) => {
  try {
    const user = await User.findOne(req.body);

    if (user) {
      res.json(user);
    } else {
      res.json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
});

app.post('/pay', async (req, res) => {
  try {
    const user = await User.findOne(req.body);

    if (user) {
      if (user.referredCode) {
        // Implement logic to pay the referrer
      }

      if (user.referralCode) {
        // Implement transaction logic
      }
    } else {
      res.json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
});

app.post('/send', async (req, res) => {
  // Implement transaction logic

  res.send('API reached');
});

app.listen(8080, () => console.log('Server running on port 8080'));
