import React from "react";

export default ({data}) => (
    <div>
        <h1>
            Contact
        </h1>
        <p>
            Hello! You can reach me via email at contact[at]iancarnation.com
        </p>
  </div>
);

export const query = graphql`
    query ContactQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`