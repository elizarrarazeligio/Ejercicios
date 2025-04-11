const mongoose = require("mongoose");
const User = require("../models/user");
const fixtures = require("../fixtures");

const MONGO_URL = "mongodb://localhost:27017/aroundtheus";

beforeAll(() => {
  return mongoose.connect(MONGO_URL);
});

afterAll(() => {
  return mongoose.disconnect();
});

describe("Pruebas de bases de datos", () => {
  beforeEach(() => {
    const { name, about, avatar, email, password } = fixtures.user;

    return User.create({
      name,
      about,
      avatar,
      email,
      password,
    });
  });

  afterEach(() => User.deleteOne({ email: fixtures.user.email }));

  it("El usuario debe estar completo", () => {
    return User.findOne({ email: fixtures.user.email }).then((user) => {
      expect(user).toBeDefined();
      expect(user.email).toBe(fixtures.user.email);
      expect(user.name).toBe(fixtures.user.name);
    });
  });
});
