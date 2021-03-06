const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();

  config.module.rules = [
    ...config.module.rules.filter((rule) => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: (modulePath) =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/(swiper|dom7)/.test(modulePath),
    },
  ];

  actions.replaceWebpackConfig(config);
};
