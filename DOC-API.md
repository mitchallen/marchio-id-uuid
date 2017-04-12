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
