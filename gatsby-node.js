const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

const articleTemplate = path.resolve('src/templates/article.js');
const projectTemplate = path.resolve('src/templates/project.js');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const {createNodeField} = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark'){
        const slug = createFilePath({node, getNode, basePath:'pages'});  
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
  };

  exports.createPages = ({graphql, boundActionCreators}) => {
      const {createPage} = boundActionCreators;
      return new Promise((resolve,reject) => {
          graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                        fields {
                            slug
                        }
                        frontmatter {
                            isProject
                        }
                        }
                    }
                }
            }
          `
        ).then(result=> {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                  path: node.fields.slug,
                  component: (node.frontmatter.isProject) ? projectTemplate : articleTemplate,
                  context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.fields.slug,
                  },
                })
              })
            resolve();
        });
      });
  };