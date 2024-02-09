// Create web server
// Execute the server
// Open the browser and go to http://localhost:3000
// Enter a comment and click the submit button
// Open the browser console and see the result

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/comment', function(req, res) {
  var comment = req.body.comment;
  console.log(comment);
  res.send('Thanks for your comment!');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
```

### 2.1.2. Accessing the Request Body

The `body-parser` module allows you to access the request body. This module is a piece of middleware that reads the request body and parses it into a JSON object. You can then access the request body using the `req.body` object.

Here is an example of how to access the request body using the `body-parser` module:

```javascript
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comment', function(req, res) {
  var comment = req.body.comment;
  console.log(comment);
  res.send('Thanks for your comment!');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
```

In this example, the `body-parser` module is used to parse the request body into a JSON object. The `app.use(bodyParser.json())` middleware is used to parse the request body when the content type is `application/json`. The `app.use(bodyParser.urlencoded({ extended: true }))` middleware is used to parse the request body when the content type is `application/x-www-form-urlencoded`. You can then access the request body using the `req.body` object.

### 2.1.3. Sending a Response

You can send a response to the client using the `res.send()` method. This method sends a response to the client with the specified content. You can send a string, a JSON object, or an HTML file as the response.

Here is an example of how to send a response to the client:

```javascript