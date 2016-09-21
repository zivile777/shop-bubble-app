
var ListItem = require('./models/list');

module.exports = function(app) {
  app.get('/items', function(req, res) {
    ListItem.find(function(err, items) {
      if (err) res.send(err)
      res.json(items); 
    });
  });
 
  app.post('/items', function(req, res) {    
    ListItem.create({
      text : req.body.text,
      done : false
    }, function(err, item) {
        if (err) res.send(err);
        ListItem.find(function(err, items) {
          if (err) res.send(err)
          res.json(items);
        });
      });
  });

  app.delete('/items/:item_id', function(req, res) {
    ListItem.remove({
      _id : req.params.item_id
    }, function(err, item) {
        if (err) res.send(err);
        ListItem.find(function(err, items) {
          if (err) res.send(err)
          res.json(items);
        });
      });
  });
};