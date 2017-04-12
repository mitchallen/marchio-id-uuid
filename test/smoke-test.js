/**
    Module: marchio-id-uuid
      Test: smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint mocha: true */
/*jshint esversion: 6 */

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../modules/index";

describe('module factory smoke test', () => {

    var _factory = null;

    before( done => {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath);
        done();
    });

    after( done => {
        // Call after all tests
        done();
    });

    beforeEach( done => {
        // Call before each test
        done();
    });

    afterEach( done => {
        // Call after eeach test
        done();
    });

    it('module should exist', done => {
        should.exist(_factory);
        done();
    });

    it('create method with no spec should return object', done => {
        _factory.create()
        .then(function(obj){
            should.exist(obj);
            done();
        })
        .catch( function(err) { 
            console.error(err); 
            done(err);  // to pass on err, remove err (done() - no arguments)
        });
    });

    it('health method should return ok', done => {
        _factory.create({})
        .then(function(obj) {
            return obj.health();
        })
        .then(function(result) {
            result.should.eql("OK");
            done();
        })
        .catch( function(err) { 
            console.error(err);
            done(err); 
        });
    });

    it('generate should succeed', done => {
        _factory.create({})
        .then(function(obj) {
            return obj.generate();
        })
        .then(function(result) {
            // console.log("RESULT: ", result);
            result.search(
                /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
            ).should.eql(0);
            done();
        })
        .catch( function(err) { 
            console.error(err);
            done(err); 
        });
    });

    it('validate should return true for valid id', done => {
        var _idMgr = null;
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate();
        })
        .then(function(result) {
            return _idMgr.validate(result);
        })
        .then(function(result) {
            result.should.eql(true);
            done();
        })
        .catch( function(err) { 
            console.error(err);
            done(err); 
        });
    });

    it('validate should return false for non-uuid id', done => {
        var _idMgr = null;
        _factory.create({})
        .then(function(obj) {
            var bogus = '1234567890';
            return obj.validate(bogus);
        })
        .then(function(result) {
            result.should.eql(false);
            done();
        })
        .catch( function(err) { 
            console.error(err);
            done(err); 
        });
    });
});
