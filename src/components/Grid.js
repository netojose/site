const React = require('react')
const { css } = require('glamor')

module.exports = {
    Row: ({ children, justifyContent = 'space-around', styles = {} }) => (
        <div className={css({ display: 'flex', justifyContent }, styles)}>
            {children}
        </div>
    ),
    Column: ({ children, styles = {} }) => (
        <div
            className={css({ flexDirection: 'row', padding: '0 10px' }, styles)}
        >
            {children}
        </div>
    )
}
