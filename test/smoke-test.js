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

    it('package method should return package name', done => {
        _factory.create({})
        .then(function(obj) {
            return obj.package();
        })
        .then(function(result) {
            result.should.eql("marchio-id-uuid");
            done();
        })
        .catch( function(err) { 
            console.error(err);
            done(err); 
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

    it('generate should default to v4', done => {
        var _idMgr = null,
            _version = "v4";
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate();
        })
        .then(function(result) {
            return _idMgr.validate(result, _version );
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

    it('generate should succeed for v1', done => {
        var _idMgr = null,
            _version = "v1";
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate( { version: _version } );
        })
        .then(function(result) {
            return _idMgr.validate(result, _version );
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

    it('generate should fail for v2', done => {
        var _idMgr = null,
            _version = "v2";
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate( { version: _version } );
        })
        .catch( function(err) { 
            // We are expecting this error
            // console.error(err);
            err.message.should.eql(_factory.ERROR.GENERATE_V1_V4_ONLY);
            done(); 
        })
        .catch( function(err) { 
            // We are NOT expecting this error
            console.error(err.message); 
            done(err);  // to pass on err, remove err (done() - no arguments)
        });
    });

    it('generate should fail for v3', done => {
        var _idMgr = null,
            _version = "v3";
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate( { version: _version } );
        })
        .catch( function(err) { 
            // We are expecting this error
            // console.error(err);
            err.message.should.eql(_factory.ERROR.GENERATE_V1_V4_ONLY);
            done(); 
        })
        .catch( function(err) { 
            // We are NOT expecting this error
            console.error(err.message); 
            done(err);  // to pass on err, remove err (done() - no arguments)
        });
    });

    it('generate should fail for v5', done => {
        var _idMgr = null,
            _version = "v5";
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate( { version: _version } );
        })
        .catch( function(err) { 
            // We are expecting this error
            // console.error(err);
            err.message.should.eql(_factory.ERROR.GENERATE_V1_V4_ONLY);
            done(); 
        })
        .catch( function(err) { 
            // We are NOT expecting this error
            console.error(err.message); 
            done(err);  // to pass on err, remove err (done() - no arguments)
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

    it('validate should default to version v4', done => {
        var _idMgr = null,
            _version = "v4";
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate( { version: _version } );
        })
        .then(function(result) {
            return _idMgr.validate(result );
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

    it('validate should return true for valid v4 specific id', done => {
        var _idMgr = null,
            _version = "v4";
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate( { version: _version } );
        })
        .then(function(result) {
            return _idMgr.validate(result, _version );
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

    it('validate should return false validating v1 against a v4 uuid', done => {
        var _idMgr = null;
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate( { version: "v4" } );
        })
        .then(function(result) {
            return _idMgr.validate(result, "v1" );
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

    it('validate should return false validating v1 against default version uuid', done => {
        var _idMgr = null;
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate();
        })
        .then(function(result) {
            return _idMgr.validate(result, "v1" );
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

    it('validate should return false validating v2 against default version uuid', done => {
        var _idMgr = null;
        _factory.create({})
        .then(function(obj) {
            _idMgr = obj;
            return obj.generate();
        })
        .then(function(result) {
            return _idMgr.validate(result, "v2" );
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

    it('validate should return true validating against a valid v2 uuid', done => {
        const _version = 2;
        _factory.create({})
        .then(function(obj) {
            const _id = `110ec58a-a0f2-${_version}ac4-8393-c866d813b8d1`;
            return obj.validate( _id, `v${_version}` );
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

    it('validate should return true validating against a valid v3 uuid', done => {
        const _version = 3;
        _factory.create({})
        .then(function(obj) {
            const _id = `110ec58a-a0f2-${_version}ac4-8393-c866d813b8d1`;
            return obj.validate( _id, `v${_version}` );
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

    it('validate should return true validating against a valid v5 uuid', done => {
        const _version = 5;
        _factory.create({})
        .then(function(obj) {
            const _id = `110ec58a-a0f2-${_version}ac4-8393-c866d813b8d1`;
            return obj.validate( _id, `v${_version}` );
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

    it('validate should reject validating against a v6 uuid', done => {
        const _version = 6;
        _factory.create({})
        .then(function(obj) {
            const _id = `110ec58a-a0f2-${_version}ac4-8393-c866d813b8d1`;
            return obj.validate( _id, `v${_version}` );
        })
        .then(function(result) {
            // should have rejected by now
            done(new Error('test fail: validate should have rejected version'));  
        })
        .catch( function(err) { 
            // We are expecting this error
            // console.error(err);
            err.message.should.eql(`${_factory.ERROR.INVALID_VERSION_PARAMETER}: v${_version}`);
            done(); 
        })
        .catch( function(err) { 
            // We are NOT expecting this error
            console.error(err.message); 
            done(err);  // to pass on err, remove err (done() - no arguments)
        });
    });
});
