<a name="module_Data Factory"></a>

## Data Factory
**See**: https://github.com/reactioncommerce/data-factory  
**Author**: @reactioncommerce  

* [Data Factory](#module_Data Factory)
    * [~Factory](#module_Data Factory..Factory) : <code>Object</code>
    * [~createMock(schema, prefix, addId)](#module_Data Factory..createMock) ⇒ <code>Object</code>
    * [~createFactoryForSchema(propName, schema)](#module_Data Factory..createFactoryForSchema) ⇒ <code>undefined</code>

<a name="module_Data Factory..Factory"></a>

### Data Factory~Factory : <code>Object</code>
Factory object will hold scehma factory utils
for creating mock data based on the attached schema

**Kind**: inner constant of [<code>Data Factory</code>](#module_Data Factory)  
<a name="module_Data Factory..createMock"></a>

### Data Factory~createMock(schema, prefix, addId) ⇒ <code>Object</code>
**Kind**: inner method of [<code>Data Factory</code>](#module_Data Factory)  
**Summary**: Creates a mock object of [faker](https://github.com/marak/Faker.js) values based on a provided schema.
This function is heavely based on [simpl-schema-mockdoc](https://github.com/CambridgeSoftwareLtd/simpl-schema-mockdoc) `getMockDoc` function.  
**Returns**: <code>Object</code> - - Mock object based on provided schema.  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>SimpleSchema</code> | A [SimpleSchema](https://github.com/aldeed/simple-schema-js) instance. |
| prefix | <code>String</code> | Mock value prefix. |
| addId | <code>Boolean</code> | True to add `_id` to mock object. |

<a name="module_Data Factory..createFactoryForSchema"></a>

### Data Factory~createFactoryForSchema(propName, schema) ⇒ <code>undefined</code>
**Kind**: inner method of [<code>Data Factory</code>](#module_Data Factory)  
**Summary**: Creates Factory[propName] for building fake documents with the given schema.  
**Returns**: <code>undefined</code> - - No return.  

| Param | Type | Description |
| --- | --- | --- |
| propName | <code>String</code> | The property name to add to the `Factory` object. This should match the   schema variable's name. |
| schema | <code>SimpleSchema</code> | A [SimpleSchema](https://github.com/aldeed/simple-schema-js) instance. |

