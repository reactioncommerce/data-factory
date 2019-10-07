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

## Mock Values

When you call `makeOne` or `makeMany`, a full document (including all nested schemas recursively) is automatically built based on the schema. The value of each node is determined like this:

- If `mockValue` is found in the schema definition, use that value. `mockValue` is not part of normal SimpleSchema but is added by and checked by this package.
- If `defaultValue` is found in the schema definition, use that value.
- If `autoValue` is found in the schema definition, use it to get a value.
- If `allowedValues` is found in the schema definition, use a random item from the array as the value.
- If all else fails, use `faker.js` to generate a random value of the type specified in the schema definition. For Number fields, the min and max values are respected when generating a random number. For String fields, the regEx value will be used if it matches one of the SimpleSchema.RegEx.*

## Thanks
Thanks to [@MaxGuitet](https://github.com/MaxGuitet) and the team at [Cambridge Software](https://github.com/CambridgeSoftwareLtd) for their work on [simpl-schema-mockdoc](https://github.com/CambridgeSoftwareLtd/simpl-schema-mockdoc) that heavily influenced this package.

### Developer Certificate of Origin
We use the [Developer Certificate of Origin (DCO)](https://developercertificate.org/) in lieu of a Contributor License Agreement for all contributions to Reaction Commerce open source projects. We request that contributors agree to the terms of the DCO and indicate that agreement by signing-off all commits made to Reaction Commerce projects by adding a line with your name and email address to every Git commit message contributed:
```
Signed-off-by: Jane Doe <jane.doe@example.com>
```

You can sign-off your commit automatically with Git by using `git commit -s` if you have your `user.name` and `user.email` set as part of your Git configuration.

We ask that you use your real full name (please no anonymous contributions or pseudonyms) and a real email address. By signing-off your commit you are certifying that you have the right to submit it under the [Apache License, Version 2.0](./LICENSE).

We use the [Probot DCO GitHub app](https://github.com/apps/dco) to check for DCO sign-offs of every commit.

If you forget to sign-off your commits, the DCO bot will remind you and give you detailed instructions for how to amend your commits to add a signature.


### License
Data Factory is licensed under the [Apache License, Version 2.0](./LICENSE).
