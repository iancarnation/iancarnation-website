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