

var Bitbucket = require('./lib/bitbucket');

var bitbucket = new Bitbucket({user_name:'terry.moore', password:'Deadhead', rest_base:'https://code.dudesoln.com'});

bitbucket.get('projects', function(err, data, response){
  if (err){
    console.log(err)
  }

  console.log(data)

  //console.log(response)
});
