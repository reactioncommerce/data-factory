import SimpleSchema from "simpl-schema";
import { createFactoryForSchema, Factory } from "./main.js";

const Thing = new SimpleSchema({
  booleanField: {
    type: Boolean
  },
  dateField: {
    type: Date
  },
  numberField: {
    type: Number
  },
  objectField: {
    type: Object
  },
  stringField: {
    type: String
  }
});

const mockFactory = {
  Thing: {
    makeOne: expect.any(Function),
    makeMany: expect.any(Function)
  }
};

beforeAll(() => {
  createFactoryForSchema("Thing", Thing);
});

// attach schema to Factory
test("createFactoryForSchema should attach schema to Factory object", () => {
  expect(Factory).toMatchSnapshot(mockFactory);
});

// create mock document from Factory
test("Create a mock document from Factory", () => {
  const mockThing = Factory.Thing.makeOne();

  expect(mockThing).toHaveProperty("_id");
  expect(mockThing).toHaveProperty("booleanField");
  expect(mockThing).toHaveProperty("dateField");
  expect(mockThing).toHaveProperty("numberField");
  expect(mockThing).toHaveProperty("objectField");
  expect(mockThing).toHaveProperty("stringField", "mockStringField");
});

// create mock document with custom prop
test("Create a mock document from Factory with a custom property value", () => {
  const mockThing = Factory.Thing.makeOne({
    stringField: "Custom Value"
  });
  expect(mockThing).toHaveProperty("stringField", "Custom Value");
});

// create many mock documents from Factory
test("Create 4 mock documents from Factory", () => {
  const mockThings = Factory.Thing.makeMany(4);
  expect(mockThings.length).toEqual(4);
});

// create mock document with custom iterator function
test("Create 4 mock documents from Factory with an iterated property value", () => {
  const mockThings = Factory.Thing.makeMany(4, {
    _id: (index) => (index + 100).toString()
  });
  expect(mockThings[0]._id).toEqual("100");
  expect(mockThings[1]._id).toEqual("101");
  expect(mockThings[2]._id).toEqual("102");
  expect(mockThings[3]._id).toEqual("103");
});
