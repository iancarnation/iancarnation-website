import React from "react";

export default ({data}) => (
    <div>
        <h1>
            Articles
        </h1>
        <p>
            Some ritin.
        </p>
  </div>
);

export const query = graphql`
    query ArticleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`