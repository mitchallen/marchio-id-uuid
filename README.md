marchio-id-uuid
==
uuid promise-based generator and validator
--

<p align="left">
  <a href="https://travis-ci.org/mitchallen/marchio-id-uuid">
    <img src="https://img.shields.io/travis/mitchallen/marchio-id-uuid.svg?style=flat-square" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/marchio-id-uuid">
    <img src="https://codecov.io/gh/mitchallen/marchio-id-uuid/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/marchio-id-uuid">
    <img src="http://img.shields.io/npm/dt/marchio-id-uuid.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/marchio-id-uuid">
    <img src="http://img.shields.io/npm/v/marchio-id-uuid.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/marchio-id-uuid">
    <img src="https://img.shields.io/github/license/mitchallen/marchio-id-uuid.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install marchio-id-uuid --save
  
* * *

## Usage

This package can generate v1 or v4 (default) uuids. It can also validate v1 through v5 uuids.

### Generate default v4 uuid

```js
var factory = require("marchio-id-uuid");

factory.create({})
.then(function(obj) {
     return obj.generate();
})
.then(function(result) {
    console.log("ID: ", result);
})
.catch( function(err) { 
    console.error(err); 
});
```

### Generate v1 uuid
  
```js
var factory = require("marchio-id-uuid");

factory.create({})
.then(function(obj) {
     return obj.generate( { version: "v1" } );
})
.then(function(result) {
    console.log("ID: ", result);
})
.catch( function(err) { 
    console.error(err); 
});
```

### Browser Example

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>marchio-id-uuid example</title>
    <meta name="description" content="marchio-id-uuid example">
    <!-- either cdn should work once tagged and published -->
    <!--
    <script src="https://cdn.rawgit.com/mitchallen/marchio-id-uuid/v0.1.0/dist/marchio-id-uuid.min.js"></script>
    <script src="https://unpkg.com/marchio-id-uuid@0.1.0/dist/marchio-id-uuid.min.js"></script>
    -->
    <script src="https://unpkg.com/marchio-id-uuid@0.1.0/dist/marchio-id-uuid.min.js"></script>
    <script>
      // Note that the 'window.'' prefix is not needed by most if not all browsers
      // var factory = window.MitchAllen.MarchioIdUuid;
      var factory = MitchAllen.MarchioIdUuid;
      factory.create({})
      .then(function(obj) {
        return obj.generate();
      })
      .then(function(result) {
        console.log("ID: ", result);
      })
      .catch( function(err) { 
        console.error(err); 
      }); 
    </script>
  </head>
  <body>
    <h1>marchio-id-uuid example</h1>
    <p>See JavaScript developer console for output.</p>
  </body>
</html>

```

* * *

## References:

* [UUID 4122 RFC](https://www.ietf.org/rfc/rfc4122.txt)
* [Universally unique identifier (wikipedia)](https://en.wikipedia.org/wiki/Universally_unique_identifier)
* [uuid (npmjs.com)](https://www.npmjs.com/package/uuid)
* https://gist.github.com/jed/982883
* https://gist.github.com/LeverOne/1308368

* * * 

## Modules

<dl>
<dt><a href="#module_marchio-id-uuid">marchio-id-uuid</a></dt>
<dd><p>Module</p>
</dd>
<dt><a href="#module_marchio-id-uuid-factory">marchio-id-uuid-factory</a></dt>
<dd><p>Factory module</p>
</dd>
<dt><a href="#module_marchio-id-uuid-ERROR">marchio-id-uuid-ERROR</a></dt>
<dd><p>Error module</p>
</dd>
</dl>

<a name="module_marchio-id-uuid"></a>

## marchio-id-uuid
Module


* [marchio-id-uuid](#module_marchio-id-uuid)
    * [.package()](#module_marchio-id-uuid+package)
    * [.health()](#module_marchio-id-uuid+health)
    * [.generate(spec)](#module_marchio-id-uuid+generate) ⇒ <code>Promise</code>
    * [.validate(uuid, [version])](#module_marchio-id-uuid+validate) ⇒ <code>Promise</code>

<a name="module_marchio-id-uuid+package"></a>

### marchio-id-uuid.package()
Returns the package name

**Kind**: instance method of <code>[marchio-id-uuid](#module_marchio-id-uuid)</code>  
<a name="module_marchio-id-uuid+health"></a>

### marchio-id-uuid.health()
Health check

**Kind**: instance method of <code>[marchio-id-uuid](#module_marchio-id-uuid)</code>  
**Example** *(Usage Example)*  
```js
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
```
<a name="module_marchio-id-uuid+generate"></a>

### marchio-id-uuid.generate(spec) ⇒ <code>Promise</code>
Generate ID String

**Kind**: instance method of <code>[marchio-id-uuid](#module_marchio-id-uuid)</code>  
**Returns**: <code>Promise</code> - that resolves to a uuid based on the version  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |
| [spec.version] | <code>string</code> | Optional version. Valid values: "v1" or "v4" (default) |

**Example** *(Generate default v4 uuid)*  
```js
var factory = require("marchio-id-uuid");

factory.create({})
.then(function(obj) {
     return obj.generate();
})
.then(function(result) {
    console.log("ID: ", result);
})
.catch( function(err) { 
    console.error(err); 
});
```
**Example** *(Generate v1 uuid)*  
```js
var factory = require("marchio-id-uuid");

factory.create({})
.then(function(obj) {
     return obj.generate( { version: "v1" } );
})
.then(function(result) {
    console.log("ID: ", result);
})
.catch( function(err) { 
    console.error(err); 
});
```
<a name="module_marchio-id-uuid+validate"></a>

### marchio-id-uuid.validate(uuid, [version]) ⇒ <code>Promise</code>
Validate ID String

**Kind**: instance method of <code>[marchio-id-uuid](#module_marchio-id-uuid)</code>  
**Returns**: <code>Promise</code> - that resolves to a uuid based on the version  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | a uuid |
| [version] | <code>string</code> | Optional version. Default to "v4". Valid values: "v1","v2","v3","v4", or "v5". |

**Example** *(Validate version v4 (default) uuid)*  
```js
var factory = require("marchio-id-uuid");

factory.create({})
.then(function(obj) {
    return obj.validate('110ec58a-a0f2-4ac4-8393-c866d813b8d1');
})
.then(function(result) {
    console.log( result ? "valid" : "invalid" );
})
.catch( function(err) { 
    console.error(err); 
});
```
**Example** *(Validate version v1 uuid)*  
```js
var factory = require("marchio-id-uuid");

factory.create({})
.then(function(obj) {
    return obj.validate(
        '110ec58a-a0f2-1ac4-8393-c866d813b8d1', 
        'v1'
    );
})
.then(function(result) {
    console.log( result ? "valid" : "invalid" );
})
.catch( function(err) { 
    console.error(err); 
});
```
<a name="module_marchio-id-uuid-factory"></a>

## marchio-id-uuid-factory
Factory module

<a name="module_marchio-id-uuid-factory.create"></a>

### marchio-id-uuid-factory.create(spec) ⇒ <code>Promise</code>
Factory method 
It takes one spec parameter that must be an object with named parameters

**Kind**: static method of <code>[marchio-id-uuid-factory](#module_marchio-id-uuid-factory)</code>  
**Returns**: <code>Promise</code> - that resolves to {module:marchio-id-uuid}  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |

**Example** *(Usage example)*  
```js
 var factory = require("marchio-id-uuid");

 factory.create({})
 .then(function(obj) {
     return obj.health();
 })
 .catch( function(err) { 
     console.error(err); 
 });
```
<a name="module_marchio-id-uuid-ERROR"></a>

## marchio-id-uuid-ERROR
Error module


| Param | Type | Description |
| --- | --- | --- |
| ```GENERATE_V1_V4_ONLY``` | <code>string</code> | marchio-id-uuid.generate only supports version values of v1 or v4 |
| ```INVALID_VERSION_PARAMETER``` | <code>string</code> | marchio-id-uuid.validate - invalid version parameter |

**Example** *(Usage example)*  
```js
.catch( (err) => {
   if( err.message == _factory.ERROR.GENERATE_V1_V4_ONLY ) {
       ...
   }
}
```


* * * 

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/marchio-id-uuid.git](https://bitbucket.org/mitchallen/marchio-id-uuid.git)
* [github.com/mitchallen/marchio-id-uuid.git](https://github.com/mitchallen/marchio-id-uuid.git)

* * *

## Donations

In lieu of donations you can support this project by buying one of my books: http://amazon.com/author/mitch.allen

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.1

* Updated browser example and documentation

#### Version 0.1.0 

* initial release

* * *
