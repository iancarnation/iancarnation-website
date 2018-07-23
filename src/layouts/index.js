import React from "react";
import g from "glamorous";
import {css} from "glamor";
import Link from "gatsby-link";

import {rhythm} from "../utils/typography";

const linkStyle = css({float: 'right'});

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
    }
`
/*<Link className={linkStyle} to={'/about/'}>
                About
            </Link>
            <Link className={linkStyle} to={'/articles/'}>
                Articles
            </Link>*/