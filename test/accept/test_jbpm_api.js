var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var SERVER_URL = 'http://0.0.0.0:8001';

exports['test_jbpm_reachable'] = function(done) {
  var urls = [
    '/jbpm/rest/history/instances',
    '/jbpm/rest/task/query',
    '/jbpm/rest/deployment'
  ];

  urls.forEach(function(url, index) {
    chai.request(SERVER_URL)
      .get(url)
      .end(function(err, res) {
        expect(err).to.be.null; //jshint ignore:line
        expect(res).to.have.status(200);

        if (index === urls.length - 1) {
          done();
        }
      });
  });
};