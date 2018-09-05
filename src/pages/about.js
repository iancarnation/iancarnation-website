import React from "react";
import resume from "../files/Ian_Rich-Resume.pdf"

export default ({data}) => (
    <div>
        <h1>
            About {data.site.siteMetadata.title}
        </h1>
        <p style={{ 'font-size': `small` }}>
            <em>Intrepid Technician  .  Insatiable Learner  .  Intriguing Artist  .  Infinite Smiles-Provider</em>
        </p>
        Hello, I'm an educator and technical artist excited to support your creative and computational needs!
        {/*<embed src={resume} type="application/pdf" width="100%" height="900px" />*/}
        <p>
            <br></br>
            <a href={resume}>View Resume</a>
        </p>
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