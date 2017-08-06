var path = require('path');

module.exports = function(app) {
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

    app.get("/survey", function(req, res){
      res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.use(function(req, res){
    var errorPage = "<body style='text-align: center;'><h1>404 Page Not Found</h1><br><h3>You won't find any friends here!</h3><br>"
    + "<p>Return to <a href='/'>Friend Finder Homepage></a></p></body>";
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(errorPage)
     res.end();
  });
};
