Documentation
-------------

## Constants

<dl>
<dt><a href="#Factory">Factory</a> : <code>Object</code></dt>
<dd><p>Factory object will hold scehma factory utils
for creating mock data based on the attached schema</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#createMock">createMock(schema, prefix, addId)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#createFactoryForSchema">createFactoryForSchema(propName, schema)</a> ⇒ <code>voild</code></dt>
<dd></dd>
</dl>

<a name="Factory"></a>

## Factory : <code>Object</code>
Factory object will hold scehma factory utils
for creating mock data based on the attached schema

**Kind**: global constant  
<a name="createMock"></a>

## createMock(schema, prefix, addId) ⇒ <code>Object</code>
**Kind**: global function  
**Summary**: Creates a mock object of faker values based on a provided schema.
This function is heavely based on [simpl-schema-mockdoc](https://github.com/CambridgeSoftwareLtd/simpl-schema-mockdoc) `getMockDoc` function.  
**Returns**: <code>Object</code> - - Mock object based on provided schema.  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Object</code> | A SimpleSchema instance. |
| prefix | <code>String</code> | Mock value prefix. |
| addId | <code>Boolean</code> | True to add `_id` to mock object. |

<a name="createFactoryForSchema"></a>

## createFactoryForSchema(propName, schema) ⇒ <code>voild</code>
**Kind**: global function  
**Summary**: Creates Factory[propName] for building fake documents with the given schema.  
**Returns**: <code>voild</code> - - No return.  

| Param | Type | Description |
| --- | --- | --- |
| propName | <code>String</code> | The property name to add to the `Factory` object. This should match the   schema variable's name. |
| schema | <code>SimpleSchema</code> | A SimpleSchema instance. |

