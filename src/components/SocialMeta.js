const React = require('react')

module.exports = ({ title, url, description, image }) => (
    <React.Fragment>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:image:alt" content={title} />
    </React.Fragment>
)
