var Mock = require("mockjs");

Mock.mock("/api/index", () => {
  return Mock.mock({
    num: 10
  });
});
