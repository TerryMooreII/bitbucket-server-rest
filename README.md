Bitbucket Server REST Api client
===================================

Supports all Bitbucket Server [REST api calls](https://developer.atlassian.com/static/rest/bitbucket-server/4.3.1/bitbucket-rest.html).

Installation
-----------------
**Not currently published**
```bash
npm install bitbucket-server-rest
```


Authentication and initialization
------------------------------------

```javascript
var Bitbucket = require('bitbucket-server-rest');

var bitbucket = new Bitbucket({
  user_name: '<your user name>',
  password: '<your password>',
  rest_base: 'http://<your bitbucket base server url>'
});

//Make a call to get a list of projects
bitbucket.get('projects', {}, function(err, data, response){
  if (err){
    console.log(err)
  }

  console.log(data)
});

```

Requests
--------------
Params is optional.

```javascript
bitbucket.get(path, params, callback);
bitbucket.post(path, params, callback);
bitbucket.put(path, params, callback);
bitbucket.delete(path, params, callback);
```

The callback parameters are as followed

`error` Is the error object, the http status code or undefined.  
`data` Is the data value from the server.  
`response` is the full http response from the server.  

REST Api
-----------------
We implement the full [Bitbucket server REST API](https://developer.atlassian.com/static/rest/bitbucket-server/4.3.1/bitbucket-rest.html) as followed.
Take any endpoint from the Bitbucket documentation and remove the {variable} items and that is the path.  For some of the endpoint that would be the same such as projects and projects/{projectId} then append the '/' to differentiate.

Pass both the url parameters and valid query parameters in the params object.  We will replace the url parameters while building the api call. The remaining parameters will be added as query parameters or added to the POST/PUT body.  

Here is the full list of endpoint mappings


 path parameter | Bitbucket endpoint
----------------|---------------------
admin/users/credentials | admin/users/credentials
admin/users/captcha | admin/users/captcha
admin/groups | admin/groups
admin/groups/add-user | admin/groups/add-user
admin/users/add-group | admin/users/add-group
admin/groups/add-users | admin/groups/add-users
admin/users/add-groups | admin/users/add-groups
admin/groups/remove-user | admin/groups/remove-user
admin/users/remove-group | admin/users/remove-group
admin/groups/more-members | admin/groups/more-members
admin/users | admin/users
admin/users/rename | admin/users/rename
admin/groups/more-non-members | admin/groups/more-non-members
admin/users/more-members | admin/users/more-members
admin/users/more-non-members | admin/users/more-non-members
admin/cluster | admin/cluster
admin/license | admin/license
admin/mail-server | admin/mail-server
admin/mail-server/sender-address | admin/mail-server/sender-address
admin/permissions/users/none | admin/permissions/users/none
admin/permissions/groups | admin/permissions/groups
admin/permissions/users | admin/permissions/users
admin/permissions/groups/none | admin/permissions/groups/none
application-properties | application-properties
groups | groups
hooks/avatar | hooks/{hookKey}/avatar
logs/rootLogger | logs/rootLogger
logs/rootLogger/ | logs/rootLogger/{levelName}
markup/preview  | markup/preview
profile/recent/repos | profile/recent/repos
projects | projects
projects/ | projects/{projectKey}
projects/avatar.png | projects/{projectKey}/avatar.png
projects/permissions/groups | projects/{projectKey}/permissions/groups
projects/permissions/users | projects/{projectKey}/permissions/users
projects/permissions/all | projects/{projectKey}/permissions/{permission}/all
projects/permissions/groups/none | projects/{projectKey}/permissions/groups/none
projects/permissions/users/none | projects/{projectKey}/permissions/users/none
projects/repos | projects/{projectKey}/repos
projects/repos/ | projects/{projectKey}/repos/{repositorySlug}
projects/repos/forks | projects/{projectKey}/repos/{repositorySlug}/forks
projects/repos/recreate | projects/{projectKey}/repos/{repositorySlug}/recreate
projects/repos/related | projects/{projectKey}/repos/{repositorySlug}/related
projects/repos/branches | projects/{projectKey}/repos/{repositorySlug}/branches
projects/repos/branches/default | projects/{projectKey}/repos/{repositorySlug}/branches/default
projects/repos/browse | projects/{projectKey}/repos/{repositorySlug}/browse
projects/repos/browse/ | projects/{projectKey}/repos/{repositorySlug}/browse/{path}
projects/repos/changes | projects/{projectKey}/repos/{repositorySlug}/changes
projects/repos/commits | projects/{projectKey}/repos/{repositorySlug}/commits
projects/repos/commits/ | projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}
projects/repos/commits/changes | projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/changes
projects/repos/commits/comments | projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments
projects/repos/commits/comments/ | projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}
projects/repos/commits/diff | projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff
projects/repos/commits/diff/ | projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff/{path}
projects/repos/commits/watch | projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch
projects/repos/compare/commits | projects/{projectKey}/repos/{repositorySlug}/compare/commits
projects/repos/compare/diff | projects/{projectKey}/repos/{repositorySlug}/compare/diff{path}
projects/repos/compare/changes | projects/{projectKey}/repos/{repositorySlug}/compare/changes
projects/repos/diff | projects/{projectKey}/repos/{repositorySlug}/diff
projects/repos/diff/ | projects/{projectKey}/repos/{repositorySlug}/diff/{path}
projects/repos/files | projects/{projectKey}/repos/{repositorySlug}/files
projects/repos/files/ | projects/{projectKey}/repos/{repositorySlug}/files/{path}
projects/repos/participants | projects/{projectKey}/repos/{repositorySlug}/participants
projects/repos/permissions/users | projects/{projectKey}/repos/{repositorySlug}/permissions/users
projects/repos/permissions/groups | projects/{projectKey}/repos/{repositorySlug}/permissions/groups
projects/repos/permissions/groups/none | projects/{projectKey}/repos/{repositorySlug}/permissions/groups/none
projects/repos/permissions/users/none | projects/{projectKey}/repos/{repositorySlug}/permissions/users/none
projects/repos/pull-requests | projects/{projectKey}/repos/{repositorySlug}/pull-requests
projects/repos/pull-requests/ | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}
projects/repos/pull-requests/activities | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/activities
projects/repos/pull-requests/decline | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/decline
projects/repos/pull-requests/merge | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge
projects/repos/pull-requests/reopen | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/reopen
projects/repos/pull-requests/approve | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve
projects/repos/pull-requests/changes | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/changes
projects/repos/pull-requests/comments | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments
projects/repos/pull-requests/comments/ | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}
projects/repos/pull-requests/commits | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commits
projects/repos/pull-requests/diff | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff
projects/repos/pull-requests/diff/ | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff/{path}
projects/repos/pull-requests/participants | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants
projects/repos/pull-requests/participants/ | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug}
projects/repos/pull-requests/tasks | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/tasks
projects/repos/pull-requests/tasks/count | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/tasks/count
projects/repos/pull-requests/watch | projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch
projects/repos/settings/hooks | projects/{projectKey}/repos/{repositorySlug}/settings/hooks
projects/repos/settings/hooks/ | projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}
projects/repos/settings/hooks/enabled | projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled
projects/repos/settings/hooks/settings | projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings
projects/repos/tags | projects/{projectKey}/repos/{repositorySlug}/tags
repos | repos
tasks | tasks
tasks/ | tasks/{taskId}
users | users
users/credentials | users/credentials
users/ | users/{userSlug}
users/avatar.png | users/{userSlug}/avatar.png
users/settings | users/{userSlug}/settings

**Unsupported**

logs/logger/{levelName} | logs/logger/{loggerName}/{levelName}

logs/logger/{loggerName} | logs/logger/{loggerName}


Todo
---------
- Added Tests


Thanks
-------------
Props to the [node-twitter](https://github.com/desmondmorris/node-twitter) package for inspiration.


License
---------------

The MIT License (MIT)

Copyright (c) 2016 Terry Moore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
