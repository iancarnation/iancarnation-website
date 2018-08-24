module.exports = {
    siteMetadata: {
        title: 'Ian Rich',
    },
    plugins: [
        {
            resolve:'gatsby-source-filesystem',
            options:{
                name:'src',
                path:`${__dirname}/src/`,
            },
        },
        {
            resolve:'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 640,
                            related: false,
                            noIframeBorder: true
                        }
                    }
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