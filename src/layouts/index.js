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
        <g.Div
            background={ 'linear-gradient(90deg,rgba(255,255,255,0) 0%, #ffffff 10%, #ffffff 50%, #ffffff 90%, rgba(255,255,255,0) 100%)'}
            margin={'0 auto'}
            overflow={'auto'}
            maxWidth={800}
        >
        
        <g.Div
           // margin={'0 auto'}
            maxWidth={800}
            //left={-50}
            padding={rhythm(3)}
            paddingTop={rhythm(1.5)}
            height={'100%'}
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
        
    </g.Div>
);
export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
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