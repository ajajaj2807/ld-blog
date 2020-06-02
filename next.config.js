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

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
