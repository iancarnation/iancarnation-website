import React from "react";

export default ({data}) => (
    <div>
        <h1>
            Contact 
        </h1>
        <p>
            Shoot me one-a them eee-mails: <b>summon[at]iancarnation.com</b>
        </p>
        <p>
            <a href="https://www.linkedin.com/in/iancarlrich/">LinkedIn Profile</a>
        </p>
        <p>
            View my codeses on <a href="https://gitlab.com/iancarnation">GitLab</a>(Recent) or <a href="https://github.com/iancarnation/">GitHub</a>(Everything)
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