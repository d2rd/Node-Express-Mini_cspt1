const express = require('express');
const db = require('./data/db');

const server = express();

server.listen(5000, () => {
  console.log(' === APP running on port 5000 ===')
})


server.get('/', (request, response) => {
  // console.log("GET REQUEST");
  response.send('<h1> GET REQUEST RECEIVED</h1>')
})

server.get('/api/users', (req, res) => {
  db.find()
  .then( users => {
    res.status(200).json({users})
  })
  .catch( err => {
     res.status(500).json({error: 'PROBLEM RETREIVING DATA'});
  })
});

server.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  
  db.findById(userId)
    .then( user => {
      res.json({ user });
      res.status(200).json({user });
    })
    .catch( err => {
      res.status(500).json({ error: 'PROBLEM RETREIVING DATA' });
    })
});

// server.post('/', (request, response) => {
//   console.log("POST REQUEST SENT");
//   response.send ({errorMessage: "Please provide name and bio for the user."})
//   respone.send ('<h1> POST REQUEST RECEIVED</h1>')
// })


