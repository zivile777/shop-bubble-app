var User = require('./models/list-bubble.js');

    module.exports = function(app) {
        app.get('/api/list-bubble', function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);
                res.json(nerds); 
            });
        });
        app.get('*', function(req, res) {
            res.sendfile('./app/views/index.html');
        });

    };
