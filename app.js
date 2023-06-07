const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; 

//product list 
app.get('/api/products/list', (req, res) => {
    const size = parseInt(req.query.size) || 10; // Default size is 10
  const page = parseInt(req.query.page) || 1; // Default page is 1
    fs.readFile('item_list.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      const jsonData = JSON.parse(data);
      const selectedFields = jsonData.map(item => ({
        id: item.id,
        item_name : item.item_name,
        item_image : item.item_image,
        item_price : item.item_price

      }));
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const paginatedselectedFields = selectedFields.slice(startIndex, endIndex);

      res.json( paginatedselectedFields);
    
    });
  });

// get product by id
app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile('item_list.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      const jsonData = JSON.parse(data);
      const item = jsonData.find(item => id == item.id);
       console.log(item);
      if (!item) {
        res.status(404).send('Item not found');
        return;
      }
      res.json(item);
    
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  