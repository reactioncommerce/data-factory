# Data Factory

Reaction Data Factory creates a simple fixture factory from [SimpleSchema](https://github.com/aldeed/simple-schema-js) definitions for testing and seeding applications.

## Install

```sh
npm install @reactioncommerce/data-factory
```


## Usage

Adding schemas to the Factory object.
``` js
import SimpleSchema from 'simpl-schema';
import { createFactoryForSchema } from "@reactioncommerce/data-factory";

const Example = new SimpleSchema({
  strProp: String,
  boolProp: Boolean,
});
createFactoryForSchema("Example", Example);
```

Creating mock data structures.
``` js
import { Factory } from "@reactioncommerce/data-factory";
const mockExample = Factory.Example.makeOne();
// mockExample output
// { _id: "e02993ea96d7", strProp: "mockStrProp", boolProp: true }

const mockExamples = Factory.Example.makeMany(2);
// mockExamples output
// [{ _id: "e02993ea96d7", strProp: "mockStrProp", boolProp: true }, { _id: "3ff4e0634ecc", strProp: "mockStrProp", boolProp: false }]
```

Creating mock data with custom property values.
``` js
const mockExample = Factory.Example.makeOne({ strProp: "Custom Value" });
// mockExample output
// { _id: "e02993ea96d7", strProp: "Custom Value", boolProp: true }
```

Creating mock data with custom property function.
``` js
const mockExamples = Factory.Example.makeMany(3, { _id: (i) => (i + 100).toString() });
// mockExamples output
// [{ _id: "100", strProp: "mockStrProp", boolProp: true }, { _id: "101", strProp: "mockStrProp", boolProp: false }], { _id: "102", strProp: "mockStrProp", boolProp: false }]
```

## Thanks
Thanks to [@MaxGuitet](https://github.com/MaxGuitet) and the team at [Cambridge Software](https://github.com/CambridgeSoftwareLtd) for their work on [simpl-schema-mockdoc](https://github.com/CambridgeSoftwareLtd/simpl-schema-mockdoc) that heavily influenced this package.
