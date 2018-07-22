import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data);
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
        <p><Link to={'/work/'}>
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
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
              <Link
                  to={node.fields.slug}
                  css={{textDecoration:'none', color:'inherit'}}
              >
                  <g.H3 marginBottom={rhythm(1 / 4)}>
                      {node.frontmatter.title}{" "}
                      <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
                  </g.H3>
                  <p>{node.excerpt}</p>
              </Link>
          </div>
      ))}
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

