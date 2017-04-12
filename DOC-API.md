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
    * [.generate()](#module_marchio-id-uuid+generate)
    * [.validate()](#module_marchio-id-uuid+validate)

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

### marchio-id-uuid.generate()
Generate ID String

**Kind**: instance method of <code>[marchio-id-uuid](#module_marchio-id-uuid)</code>  
**Example** *(Usage Example)*  
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
<a name="module_marchio-id-uuid+validate"></a>

### marchio-id-uuid.validate()
Validate ID String

**Kind**: instance method of <code>[marchio-id-uuid](#module_marchio-id-uuid)</code>  
**Example** *(Usage Example)*  
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
| ```MODEL_MUST_BE_DEFINED``` | <code>string</code> | datastore.create: model must be defined |

**Example** *(Usage example)*  
```js
 .catch( (err) => {
    if( err.message == _factory.ERROR.MODEL_MUST_BE_DEFINED ) {
        ...
    }
}
```
