

var Bitbucket = require('./lib/bitbucket');

var bitbucket = new Bitbucket({user_name:'terry.moore', password:'Deadhead'});

bitbucket.get('projects/repos/pull-requests/', {projectKey:'DSI_WEB', repositorySlug: 'dudecontrols', pullRequestId: 142}, function(err, data, response){
  if (err){
    console.log(err)
  }

  console.log(data)

  //console.log(response)
});
