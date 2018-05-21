# Data Factory

_**Note:** This project is a work in progress and should not be used in production at this time._

Reaction Data Factory provides a simple fixture factory for testing and seeding Reaction Commerce applications.

## Install

```sh
npm install @reactioncommerce/data-factory
```


## Usage

Adding schemas to the Factory object.
``` js
import { createFactoryForSchema } from "@reactioncommerce/data-factory";
createFactoryForSchema("Tag", Tag);
```

Creating mock data structures.
``` js
import { Factory } from "@reactioncommerce/data-factory";
const mockTag = Factory.Tag.makeOne({ customProp: value });
const mockTags = Factory.Tag.makeMany(5, { customProp: value });
```
