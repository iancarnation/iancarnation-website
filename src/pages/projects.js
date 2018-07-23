import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({data}) => (
    <div>
        <g.H1>
            Projects
        </g.H1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
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
  </div>
);

export const query = graphql`
    query ProjectQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order:DESC},
            filter: {frontmatter: {isProject: {eq: true},published: {eq: true}}}) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                  published
                  isProject
                }
                fields {
                    slug
                }
                excerpt
              }
            }
          }
    }
`