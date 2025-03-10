const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Redirect all traffic to the frontend URL
app.get('*', (req, res) => {
  res.redirect('https://nus-wolfram-code-fe.fly.dev' + req.url);
});

app.listen(port, () => {
  console.log(`Redirect server running on port ${port}`);
}); 