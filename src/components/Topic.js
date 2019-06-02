const React = require('react')
const { css } = require('glamor')

const Section = require('./Section')
const { colors } = require('../variables')

const BREAKPOINT = '@media(max-width: 960px)'

module.exports = ({ id, title, description, children }) => (
    <Section id={id}>
        <div
            className={css({
                paddingTop: 15,
                display: 'flex',
                [BREAKPOINT]: {
                    flexDirection: 'column'
                }
            })}
        >
            <div
                className={css({
                    padding: '0 10px',
                    width: '30%',
                    [BREAKPOINT]: {
                        width: '100%'
                    }
                })}
            >
                <h3
                    className={css({
                        fontSize: 30,
                        margin: 0,
                        ' &:after': { content: '.', color: colors.primary },
                        '@media print': {
                            ' &:after': { content: "''" }
                        }
                    })}
                >
                    {title}
                </h3>
                <p
                    className={css({
                        margin: 0,
                        [BREAKPOINT]: {
                            display: 'none'
                        }
                    })}
                >
                    {description}
                </p>
            </div>
            <div
                className={css({
                    padding: '0 10px',
                    width: '70%',
                    [BREAKPOINT]: {
                        width: '100%'
                    }
                })}
            >
                {children}
            </div>
        </div>
    </Section>
)
