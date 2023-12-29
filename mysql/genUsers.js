const { faker } = require("@faker-js/faker");

function createRandomUser() {
  return [faker.person.fullName(), faker.location.streetAddress()];
}

function genUsers(count) {
  return faker.helpers.multiple(createRandomUser, {
    count,
  });
}

module.exports = { genUsers };
