const React = require('react')
const { css } = require('glamor')

const { colors } = require('../variables')

module.exports = ({ children, ...props }) => (
    <section
        className={css({
            borderBottom: `solid 1px ${colors.accent}`,
            paddingBottom: 20,
            paddingTop: 100,
            marginTop: -100
        })}
        {...props}
    >
        <div
            className={css({
                maxWidth: 1200,
                margin: '0 auto',
                padding: '0 15px'
            })}
        >
            {children}
        </div>
    </section>
)
