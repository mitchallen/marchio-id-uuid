/**
    Module: marchio-id-uuid
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

const uuid = require('uuid');

/**
 * Module
 * @module marchio-id-uuid
 */

/**
 * 
 * Factory module
 * @module marchio-id-uuid-factory
 */

 /** 
 * Factory method 
 * It takes one spec parameter that must be an object with named parameters
 * @param {Object} spec Named parameters object
 * @returns {Promise} that resolves to {module:marchio-id-uuid}
 * @example <caption>Usage example</caption>
    var factory = require("marchio-id-uuid");
 
    factory.create({})
    .then(function(obj) {
        return obj.health();
    })
    .catch( function(err) { 
        console.error(err); 
    });
 */
module.exports.create = (spec) => {

    return new Promise((resolve, reject) => {

        spec = spec || {};

        // reject("reason");

        // private 
        let _package = "marchio-id-uuid";

        const _uuidRegex = {
            "v1" : /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            "v2" : /^[0-9A-F]{8}-[0-9A-F]{4}-[2][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            "v3" : /^[0-9A-F]{8}-[0-9A-F]{4}-[3][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            "v4" : /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            "v5" : /^[0-9A-F]{8}-[0-9A-F]{4}-[5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
        };

        resolve({
            // public
            /** Returns the package name
              * @function
              * @instance
              * @memberof module:marchio-id-uuid
            */
            package: () => _package,
            /** Health check
              * @function
              * @instance
              * @memberof module:marchio-id-uuid
              * @example <caption>Usage Example</caption>
                var factory = require("marchio-id-uuid");
             
                factory.create({})
                .then(function(obj) {
                    return obj.health();
                })
                .then(function(result) {
                    console.log("HEALTH: ", result);
                })
                .catch( function(err) { 
                    console.error(err); 
                });
            */
            health: function() {
                return new Promise((resolve,reject) => {
                    resolve("OK");
                });
            },
            /** Generate ID String
              * @function
              * @instance
              * @memberof module:marchio-id-uuid
              * @example <caption>Usage Example</caption>
              * var factory = require("marchio-id-uuid");
              *
              * factory.create({})
              * .then(function(obj) {
              *      return obj.generate();
              * })
              * .then(function(result) {
              *     console.log("ID: ", result);
              * })
              * .catch( function(err) { 
              *     console.error(err); 
              * });
            */
            generate: function() {
                return new Promise((resolve,reject) => {
                    resolve( uuid.v4() );
                });
            },
            /** Validate ID String
              * @function
              * @instance
              * @memberof module:marchio-id-uuid
              * @example <caption>Usage Example</caption>
              * var factory = require("marchio-id-uuid");
              * 
              * factory.create({})
              * .then(function(obj) {
              *     return obj.validate('110ec58a-a0f2-4ac4-8393-c866d813b8d1');
              * })
              * .then(function(result) {
              *     console.log( result ? "valid" : "invalid" );
              * })
              * .catch( function(err) { 
              *     console.error(err); 
              * });
            */
            validate: function( str, ver ) {
                const v = ver ? ver : "v4";
                return new Promise((resolve,reject) => {
                    if(!_uuidRegex[v]) {
                        reject(`marchio-id-uuid.validate - invalid version parameter: ${v}`);
                    }
                    resolve( str.search(_uuidRegex[v]) != -1 );
                });
            }
        });
    });
};
