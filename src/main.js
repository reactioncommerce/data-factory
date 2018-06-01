import get from "lodash.get";
import set from "lodash.set";
import faker from "faker";
import SimpleSchema from "simpl-schema";

SimpleSchema.extendOptions(["mockValue"]);

/**
 * @const {Object} Factory - Factory object will hold scehma factory utils
 * for creating mock data based on the attached schema
 */
export const Factory = {};

/**
 *
 * @name createMock
 * @function
 * @summary Creates a mock object of faker values based on a provided schema.
 * This function is heavely based on [simpl-schema-mockdoc]{@link https://github.com/CambridgeSoftwareLtd/simpl-schema-mockdoc} `getMockDoc` function.
 * @param {Object} schema - A SimpleSchema instance.
 * @param {String} prefix - Mock value prefix.
 * @param {Boolean} addId - True to add `_id` to mock object.
 * @return {Object} - Mock object based on provided schema.
 */
const createMock = (schema, prefix, addId) => {
  const docPrefix = prefix || "mock";
  const mockDoc = {};
  const model = schema._schema;

  Object.keys(model).forEach((key) => {
    let fieldValue = null;

    // If field defined by parent
    const currentMockValue = get(mockDoc, `${key.replace(".$", ".0")}`);
    if (currentMockValue !== undefined) {
      return;
    }

    const defField = get(model[key], "type.definitions[0]") || model[key];

    try {
      if (model[key].mockValue !== undefined) {
        fieldValue = model[key].mockValue;
      } else if (model[key].defaultValue !== undefined) {
        fieldValue = model[key].defaultValue;
      } else if (model[key].autoValue !== undefined) {
        fieldValue = model[key].autoValue.call({ operator: null });
      } else if (Array.isArray(defField.allowedValues)) {
        fieldValue = defField.allowedValues[0]; // eslint-disable-line
      } else {
        throw new Error("Invalid");
      }
    } catch (err) {
      // Need 'defField' for field like: `key: Boolean`
      const fieldType = defField.type || defField;

      switch (fieldType) {
        case Date:
          fieldValue = new Date(faker.random.number() * 1000);
          break;

        case Number:
        case SimpleSchema.Integer:
          fieldValue = defField.min || defField.max || faker.random.number();
          break;

        case String:
          fieldValue = `${docPrefix}${key.replace(/^\w/, (char) =>
            char.toUpperCase())}`;
          if (defField.regEx) {
            switch (String(defField.regEx)) {
              case String(String(SimpleSchema.RegEx.Email)):
              case String(String(SimpleSchema.RegEx.EmailWithTLD)):
                fieldValue = faker.internet.email();
                break;

              case String(SimpleSchema.RegEx.Domain):
              case String(SimpleSchema.RegEx.WeakDomain):
                fieldValue = `${faker.internet.domainName()}${faker.internet.domainWord()}`;
                break;

              case String(SimpleSchema.RegEx.IP):
              case String(SimpleSchema.RegEx.IPv4):
                fieldValue = faker.internet.ip();
                break;

              case String(SimpleSchema.RegEx.IPv6):
                fieldValue = faker.internet.ipv6();
                break;

              case String(SimpleSchema.RegEx.Url):
                fieldValue = faker.internet.url();
                break;

              case String(SimpleSchema.RegEx.Id):
                fieldValue = faker.random.alphaNumeric(17);
                break;

              case String(SimpleSchema.RegEx.ZipCode):
                fieldValue = faker.address.zipCode();
                break;

              case String(SimpleSchema.RegEx.Phone):
                fieldValue = key.match(/mobile/i)
                  ? faker.phone.phoneNumber("074## ######")
                  : faker.phone.phoneNumber("012## ######");
                break;

              default:
                break;
            }
          }
          break;

        case Boolean:
          fieldValue =
            defField.defaultValue !== undefined
              ? defField.defaultValue
              : faker.random.boolean();
          break;

        case Object: {
          fieldValue = {};
          break;
        }

        case Array:
          fieldValue = [];
          break;

        default:
          if (SimpleSchema.isSimpleSchema(fieldType)) {
            fieldValue = createMock(fieldType, prefix);
          }
          break;
      }
    }

    set(mockDoc, key.replace(".$", ".0"), fieldValue);
  });

  if (addId) {
    mockDoc._id = faker.random.alphaNumeric(17);
  }

  return mockDoc;
};

/**
 * @name createFactoryForSchema
 * @function
 * @summary Creates Factory[propName] for building fake documents with the given schema.
 * @param {String} propName - The property name to add to the `Factory` object. This should match the
 *   schema variable's name.
 * @param {SimpleSchema} schema - A SimpleSchema instance.
 * @return {voild} - No return.
 */
export function createFactoryForSchema(propName, schema) {
  // eslint-disable-next-line
  if (Factory.hasOwnProperty(propName)) {
    throw new Error(`Factory already has a "${propName}" property`);
  }

  Factory[propName] = {
    makeOne(props = {}, index) {
      const doc = createMock(schema, "mock", true);
      Object.keys(props).forEach((key) => {
        const value = props[key];
        if (typeof value === "function") {
          doc[key] = value(index);
        } else {
          doc[key] = value;
        }
      });
      return doc;
    },
    makeMany(length, props) {
      return Array.from({ length }).map((value, index) =>
        this.makeOne(props, index));
    }
  };
}
