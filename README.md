Bitbucket Server REST Api client

Supports all Bitbucket Server [REST api calls](https://developer.atlassian.com/static/rest/bitbucket-server/4.3.1/bitbucket-rest.html).



```javascript
var Bitbucket = require('bitbucket-server-rest');

var bitbucket = new Bitbucket({
  user_name: '<your user name>',
  password: '<your password>',
  rest_base: 'http://<your bitbucket base server url>'
});

bitbucket.get('projects', {}, function(err, data, response){
  if (err){
    console.log(err)
  }

  console.log(data)
});

```

Requests
--------------
```javascript
bitbucket.get(path, params, callback);
bitbucket.post(path, params, callback);
bitbucket.put(path, params, callback);
bitbucket.delete(path, params, callback);
```
