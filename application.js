var mbaasApi = require('fh-mbaas-api');
var express = require('express');
var mbaasExpress = mbaasApi.mbaasExpress();
var proxy = require('express-http-proxy');

// list the endpoints which you want to make securable here
var securableEndpoints;
securableEndpoints = [];

var app = express();

var jbpmPort = process.env.JBPM_PORT || 8080;
var jbpmHost = process.env.JBPM_IP || '0.0.0.0';
var jbpmUsername = process.env.JBPM_USERNAME || null;
var jbpmPassword = process.env.JBPM_PASSWORD || null;

var port = process.env.FH_PORT || 8001;
var host = '0.0.0.0';

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys(securableEndpoints));
app.use('/mbaas', mbaasExpress.mbaas);

// allow serving of static files from the public directory
app.use(express.static(__dirname + '/public'));

// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

app.use('/jbpm', proxy(jbpmHost + ':' + jbpmPort, {
  decorateRequest: function(proxyReq) {
    if (jbpmUsername && jbpmPassword) {
      proxyReq.headers['Authorization'] = 'Basic ' + new Buffer(jbpmUsername + ':' + jbpmPassword).toString('base64');
    }
    return proxyReq;
  }
}));

// Important that this is last!
app.use(mbaasExpress.errorHandler());

app.listen(port, host, function() {
  console.log("App started at: " + new Date() + " on port: " + port);
});
