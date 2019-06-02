const React = require('react')
const { css } = require('glamor')

const { colors } = require('../variables')

module.exports = ({ children, primary, ...props }) => (
    <a
        className={`${css({
            fontSize: 12,
            lineHeight: 1.66,
            textTransform: 'uppercase',
            fontWeight: 700,
            fontFamily: "'Lato', sans-serif",
            transition: 'all 0.3s ease',
            minWidth: 150,
            textAlign: 'center',
            padding: 10,
            margin: 5,
            display: 'inline-block',
            border: 'none',
            borderRadius: 2,
            color: colors.secondary,
            background: colors.accent,
            ' &:hover': {
                boxShadow: '10px 10px 20px rgba(37, 37, 37, 0.2)',
                color: colors.secondary
            },
            ' &.primary': {
                background: colors.primary,
                color: colors.light,
                ' &:hover': {
                    boxShadow: '10px 10px 20px rgba(51, 51, 255, 0.2)'
                }
            }
        })}${primary ? ' primary' : ''}`}
        {...props}
    >
        {children}
    </a>
)
