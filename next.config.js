const path = require("path");
const withImages = require("next-images");

const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, "./assets/sass")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(txt|md)$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = withImages(config);
