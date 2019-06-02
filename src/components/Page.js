const React = require('react')
const { css } = require('glamor')

const { colors } = require('../variables')
const SocialMeta = require('./SocialMeta')

css.global('*', { fontFamily: "'Lato', sans-serif", boxSizing: 'border-box' })
css.global('body', { margin: 0, paddingTop: 100 })
css.insert('@media print{body{padding-top: 0}}')
css.global('img', { userSelect: 'none' })
css.global('p, a', { fontSize: 16, lineHeight: 1.56, color: colors.secondary })
css.global('a', { textDecoration: 'none' })
css.global('a:hover, a[target="_blank"]', { color: colors.primary })

module.exports = ({ children, title, css = '', js = '' }) => (
    <html lang="en">
        <head>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Lato|Roboto"
            />
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <script dangerouslySetInnerHTML={{ __html: js }} />
            <title>{title}</title>
            <SocialMeta
                title={title}
                url="https://joseneto.dev"
                description="José Neto's website"
                image="/assets/images/me.jpg"
            />
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-58594179-3"
            />
        </head>
        <body>{children}</body>
    </html>
)
