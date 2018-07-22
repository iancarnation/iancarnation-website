import React from "react";

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            I'm a Projeccftttttttt!!!!!!!
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
    );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
