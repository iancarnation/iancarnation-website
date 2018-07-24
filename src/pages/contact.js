import React from "react";

export default ({data}) => (
    <div>
        <h1>
            Contact 
        </h1>
        <p>
            Shoot me one-a them eee-mails: <b>summon[at]iancarnation.com</b>
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