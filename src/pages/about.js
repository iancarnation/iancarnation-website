import React from "react";

export default ({data}) => (
    <div>
        <h1>
            About {data.site.siteMetadata.title}
        </h1>
        <p>
            <em>Intrepid Technician | Insatiable Learner | Intriguing Artist | Infinite Smiles-Provider</em>
        </p>
        Hello, I'm an educator and technical artist excited to support your creative and computational needs!
  </div>
);

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`