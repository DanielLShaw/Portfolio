const path = require("path");
const withImages = require("next-images");

const config = {
  sassOptions: {
    includePaths: [path.join(__dirname, "./assets/sass")],
  },
};

module.exports = withImages(config);
