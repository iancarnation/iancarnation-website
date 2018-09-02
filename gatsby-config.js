module.exports = {
    siteMetadata: {
        title: 'Ian Rich',
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
        resolve:'gatsby-source-filesystem',
            options:{
                name:'src',
                path:`${__dirname}/src/`,
            },
        },
        {
        resolve: `gatsby-source-filesystem`,
            options: {
              name: `img`,
              path: `${__dirname}/src/img/`
            }
        },
        `gatsby-plugin-catch-links`,
        {
        resolve:'gatsby-transformer-remark',
            options: {
                plugins: [
                    `gatsby-remark-copy-linked-files`,
                    {
                    resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1080,
                        },
                    },
                    {
                    resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 640,
                            related: false,
                            noIframeBorder: true
                        }
                    },
                    {
                    resolve: `gatsby-remark-prismjs`,
                        options: {
                          // Class prefix for <pre> tags containing syntax highlighting;
                          // defaults to 'language-' (eg <pre class="language-js">).
                          // If your site loads Prism into the browser at runtime,
                          // (eg for use with libraries like react-live),
                          // you may use this to prevent Prism from re-processing syntax.
                          // This is an uncommon use-case though;
                          // If you're unsure, it's best to use the default value.
                          classPrefix: "language-",
                          // This is used to allow setting a language for inline code
                          // (i.e. single backticks) by creating a separator.
                          // This separator is a string and will do no white-space
                          // stripping.
                          // A suggested value for English speakers is the non-ascii
                          // character '›'.
                          inlineCodeMarker: null,
                          // This lets you set up language aliases.  For example,
                          // setting this to '{ sh: "bash" }' will let you use
                          // the language "sh" which will highlight using the
                          // bash highlighter.
                          aliases: {},
                        },
                      },
                ]
            }
        },
        'gatsby-plugin-glamor',
        {
        resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },     
    ],
};