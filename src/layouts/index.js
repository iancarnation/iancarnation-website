import React from "react";
import g from "glamorous";
import {css} from "glamor";
import Link from "gatsby-link";
//import Img from "gatsby-image";

import {rhythm} from "../utils/typography";

import './index.css'

const linkStyle = css({float: 'right'});

const mainDiv = g.div({
    
})

const TopLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({children, data}) => (
    <g.Div
        display={'flex'}
        flexDirection={'column'}
    >
        {/*<Img
            css={{ top: 0, left: 0, right: 0, zIndex: -1 }}
            style={{ position: `absolute`}}
            sizes={data.file.childImageSharp.sizes}
        />*/}
        <g.Div
            background={ 'linear-gradient(90deg,rgba(255,255,255,0) 0%, #ffffff 10%, #ffffff 50%, #ffffff 90%, rgba(255,255,255,0) 100%)'}
            margin={'0 auto'}
            maxWidth={700}  
            padding={rhythm(2)}
            paddingTop={rhythm(1.5)}
        >
            <Link to={'/'}>
                <g.H3
                    marginBottom={rhythm(2)}
                    display={'inline-block'}
                    fontStyle={'normal'}
                >
                    {data.site.siteMetadata.title}
                </g.H3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <TopLink to="/">Home</TopLink>
                <TopLink to="/about/">About</TopLink>
                <TopLink to="/projects/">Projects</TopLink>
                <TopLink to="/articles/">Articles</TopLink>
                <TopLink to="/contact/">Contact</TopLink>
            </ul>
            {children()}
        </g.Div>
    </g.Div>
);
export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
        file(relativePath: {regex: "/maze_full_extra_tall.jpg/" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              sizes(maxWidth: 1920) {
                ...GatsbyImageSharpSizes
              }
            }
          }
    }
`
/*<Link className={linkStyle} to={'/about/'}>
                About
            </Link>
            <Link className={linkStyle} to={'/articles/'}>
                Articles
            </Link>*/