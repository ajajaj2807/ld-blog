const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
