<a name="module_data-factory"></a>

## data-factory
**See**: https://github.com/reactioncommerce/data-factory  
**Author**: [@reactioncommerce](https://github.com/reactioncommerce)  

* [data-factory](#module_data-factory)
    * [~Factory](#module_data-factory..Factory) : <code>Object</code>
    * [~createMock(schema, prefix, addId)](#module_data-factory..createMock) ⇒ <code>Object</code>
    * [~createFactoryForSchema(propName, schema)](#module_data-factory..createFactoryForSchema) ⇒ <code>undefined</code>

<a name="module_data-factory..Factory"></a>

### data-factory~Factory : <code>Object</code>
Factory object will hold scehma factory utils
for creating mock data based on the attached schema

**Kind**: inner constant of [<code>data-factory</code>](#module_data-factory)  
<a name="module_data-factory..createMock"></a>

### data-factory~createMock(schema, prefix, addId) ⇒ <code>Object</code>
**Kind**: inner method of [<code>data-factory</code>](#module_data-factory)  
**Summary**: Creates a mock object of [faker](https://github.com/marak/Faker.js) values based on a provided schema.
This function is heavely based on [simpl-schema-mockdoc](https://github.com/CambridgeSoftwareLtd/simpl-schema-mockdoc) `getMockDoc` function.  
**Returns**: <code>Object</code> - - Mock object based on provided schema.  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>SimpleSchema</code> | A [SimpleSchema](https://github.com/aldeed/simple-schema-js) instance. |
| prefix | <code>String</code> | Mock value prefix. |
| addId | <code>Boolean</code> | True to add `_id` to mock object. |

<a name="module_data-factory..createFactoryForSchema"></a>

### data-factory~createFactoryForSchema(propName, schema) ⇒ <code>undefined</code>
**Kind**: inner method of [<code>data-factory</code>](#module_data-factory)  
**Summary**: Creates Factory[propName] for building fake documents with the given schema.  
**Returns**: <code>undefined</code> - - No return.  

| Param | Type | Description |
| --- | --- | --- |
| propName | <code>String</code> | The property name to add to the `Factory` object. This should match the   schema variable's name. |
| schema | <code>SimpleSchema</code> | A [SimpleSchema](https://github.com/aldeed/simple-schema-js) instance. |

