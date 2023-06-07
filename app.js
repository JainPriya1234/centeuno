const express = require('express');
const app = express();
const port = 3000; 
const Routes = require('./routes/product.routes');
app.use(Routes);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  