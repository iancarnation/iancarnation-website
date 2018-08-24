import React from "react";
import Img from "gatsby-image";

export default ({data}) => {
    const post = data.markdownRemark;
    console.log(post.frontmatter.cover_image);
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            {post.frontmatter.cover_image != null &&
                    
                    <Img sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
                  }
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
    );
};

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover_image{
          publicURL
          childImageSharp{
            sizes(maxWidth: 100){
              srcSet
            }
          }
        }
      }
    }
  }
`;
