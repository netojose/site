const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { renderStatic } = require('glamor/server')
const uglifyJs = require('uglify-js')
const fs = require('fs')

const Site = require('./components/Site')

const { css: cssRules } = renderStatic(() =>
    ReactDOMServer.renderToStaticMarkup(<Site />)
)

const regex = ',[ ]{0,}\\[data-css-([^{]*)'
const css = cssRules.replace(new RegExp(regex, 'g'), '')
const jsCode = fs.readFileSync('./src/scripts.js', 'utf8')
const js = uglifyJs.minify(jsCode).code

const html = ReactDOMServer.renderToStaticMarkup(<Site css={css} js={js} />)

fs.writeFileSync('./dist/index.html', '<!DOCTYPE html>' + html)
