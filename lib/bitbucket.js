'use strict';
var request = require('request');
var urls = require('./bitbucketEndpoints');
var extend = require('deep-extend');

var VERSION = require('../package.json').version;

function Bitbucket(options) {
  if (!(this instanceof Bitbucket)) return new Bitbucket(options);

  this.VERSION = VERSION;

  this.options = extend({
    user_name: null,
    password: null,
    rest_base: null,
    request_options: {
      headers: {
        'Accept': 'application/json',
      }
    }
  }, options);

  this.request = request;
}

Bitbucket.prototype.__buildEndpoint = function(path, params) {
  if (path.charAt(0) === '/') {
    '' + path;
  }

  var url = this.options.rest_base + '/' + urls[path];

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      url = url.replace('{' + key + '}', params[key]);
      delete params[key];
    }
  }

  return {
    url: url,
    params: params
  }
};

Bitbucket.prototype.__request = function(method, path, params, callback) {
  var endpoint = this.__buildEndpoint(path, params);

  if (typeof params === 'function'){
    callback = params;
    params = {};
  }

  var options = {
    method: method.toLowerCase(), // Request method - get || post
    url: endpoint.url
  };
  // Pass url parameters if get
  if (method === 'get') {
    options.qs = endpoint.params;
  }

  // Pass form data if post
  if (method === 'post' || method === 'put') {
    options.form = params;
  }

  this.request(options, function(error, response, data) {
    if (error) {
      callback(error, data, response);
    } else {
      try {
        data = JSON.parse(data);
      } catch (parseError) {
        callback(new Error('Status Code: ' + response.statusCode), data, response);
      }

      if (typeof data.errors !== 'undefined') {
        callback(data.errors, data, response);
      } else if (response.statusCode !== 200) {
        callback(new Error('Status Code: ' + response.statusCode), data, response);
      } else {
        callback(null, data, response);
      }
    }
  }).auth(this.options.user_name, this.options.password, true);
}

Bitbucket.prototype.get = function(url, params, callback) {
  return this.__request('get', url, params, callback);
};

Bitbucket.prototype.post = function(url, params, callback) {
  return this.__request('post', url, params, callback);
};

Bitbucket.prototype.put = function(url, params, callback) {
  return this.__request('put', url, params, callback);
};

Bitbucket.prototype.post = function(url, params, callback) {
  return this.__request('delete', url, params, callback);
};

module.exports = Bitbucket;
