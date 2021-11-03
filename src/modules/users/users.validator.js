const APIError = require("../../utils/error");

module.exports = {
  validate: async (data) => {
    try {
      const errorArr = [];
      if (!data.username || data.username === null || data.username === "") {
        errorArr.push({ name: "Username field is required" });
      }
      if (!data.password || data.password === null || data.password === "") {
        errorArr.push({ name: "Password field is required" });
      }
      if (!data.mobile || data.mobile === null || data.mobile === "") {
        errorArr.push({ name: "Mobile field is required" });
      }

      return errorArr;
    } catch (error) {
      throw new APIError(error);
    }
  },
};
