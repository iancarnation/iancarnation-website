import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import Img from "gatsby-image";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data);

  const articles = data.allMarkdownRemark.edges.filter(({node}) => 
                      (node.frontmatter.published && !node.frontmatter.isProject));
  const projects = data.allMarkdownRemark.edges.filter(({node}) => 
                      (node.frontmatter.published && node.frontmatter.isProject));                    
  console.log(articles);
  return (
    <div>
      <div>
        <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
          About
        </g.H1>
        <p>
          Hello, I'm an educator and technical artist excited to support your creative and computational needs!
        </p>
        <p><Link to={'/about/'}>
              Read More
            </Link>
        </p>
      </div>
      <div>
        <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
          Featured Work
        </g.H1>
        {projects.map(({ node }) => (
          <div key={node.id}>
          
              <Link
                  to={node.fields.slug}
                  css={{textDecoration:'none', color:'inherit'}}
              >
                  <g.H3 marginBottom={rhythm(1 / 4)}>
                      {node.frontmatter.title}{" "}
                  </g.H3>
                  {node.frontmatter.cover_image != null &&
                    <Img sizes={node.frontmatter.cover_image.childImageSharp.sizes} />
                  }
                  <p>{node.excerpt}</p>
              </Link>
          </div>
      ))}
        <p><Link to={'/projects/'}>
              See More Work
            </Link>
        </p>
      </div>
      <div>
        <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
          Experience
        </g.H1>
        <p><Link to={'/about/'}>
              See Full Resume
            </Link>
        </p>
      </div>
      <div>
        <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
          Articles
        </g.H1>
        {articles.map(({ node }) => (
          <div key={node.id}>
              <Link
                  to={node.fields.slug}
                  css={{textDecoration:'none', color:'inherit'}}
              >
                  <g.H3 marginBottom={rhythm(1 / 4)}>
                      {node.frontmatter.title}{" "}
                  </g.H3>
                  <p>{node.excerpt}</p>
              </Link>
          </div>
      ))}
      <p><Link to={'/articles/'}>
              All Articles
            </Link>
        </p>
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order:DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            published
            isProject
            cover_image{
              publicURL
              childImageSharp{
                sizes(maxWidth: 100){
                  srcSet
                }
              }
            }
          }
          fields {
              slug
          }
          excerpt
        }
      }
    }
  }
`;

