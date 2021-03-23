const React = require('react')
const { css } = require('glamor')

const Section = require('./Section')
const Grid = require('./Grid')
const { colors } = require('../variables')

const BREAKPOINT = '@media(max-width: 960px)'

const MenuItem = ({ target, text }) => (
    <li
        className={css({
            listStyle: 'none',
            margin: '8px 0 10px 20px',
            display: 'inline-block',
            [BREAKPOINT]: {
                display: 'block'
            }
        })}
    >
        <a
            className={css({
                textTransform: 'uppercase',
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1.66
            })}
            href={`#${target}`}
        >
            {text}
        </a>
    </li>
)

const hamburguerLine = {
    backgroundColor: colors.dark,
    borderRadius: 3,
    content: "''",
    display: 'block',
    height: 5,
    margin: '7px 0',
    transition: 'all .2s ease-in-out'
}

module.exports = () => (
    <header
        className={css({
            paddingTop: 20,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            background: colors.light,
            zIndex: 1000,
            margin: '0 auto',
            '@media print': {
                display: 'none'
            }
        })}
    >
        <Section>
            <Grid.Row justifyContent="space-between">
                <Grid.Column>
                    <h1 className={css({ margin: 0 })}>
                        <a
                            className={css({
                                fontSize: 30,
                                fontWeight: 700,
                                ' &:after': {
                                    content: '.',
                                    color: colors.primary
                                }
                            })}
                            href="#hello"
                        >
                            José Neto
                        </a>
                    </h1>
                </Grid.Column>
                <Grid.Column>
                    <label
                        htmlFor="drawer-control"
                        className={css({
                            cursor: 'pointer',
                            width: 40,
                            display: 'none',
                            [BREAKPOINT]: {
                                display: 'block'
                            },
                            ':after': hamburguerLine,
                            ':before': hamburguerLine,
                            ' div': hamburguerLine
                        })}
                    >
                        <div />
                    </label>
                    <input
                        type="checkbox"
                        id="drawer-control"
                        className={css({
                            display: 'none',
                            [BREAKPOINT]: {
                                ':checked': {
                                    display: 'block',
                                    width: '100vw',
                                    height: '100vh',
                                    top: 0,
                                    left: 0,
                                    position: 'fixed',
                                    opacity: 0,
                                    zIndex: 9998,
                                    ' + div': {
                                        display: 'block',
                                        ' + ul': {
                                            transform: 'translateX(0px)',
                                            boxShadow:
                                                '5px 0px 15px 4px rgba(0,0,0,0.15)'
                                        }
                                    }
                                }
                            }
                        })}
                    />
                    <div
                        className={css({
                            zIndex: 9997,
                            display: 'none',
                            width: '100vw',
                            height: '100vh',
                            top: 0,
                            left: 0,
                            position: 'fixed',
                            background: colors.dark,
                            opacity: 0.4
                        })}
                    />
                    <ul
                        id="menu"
                        className={css({
                            margin: 0,
                            padding: 0,
                            [BREAKPOINT]: {
                                transition: 'all 200ms ease-out',
                                transform: 'translateX(-200px)',
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                background: colors.light,
                                height: '100vh',
                                width: 200
                            }
                        })}
                    >
                        <MenuItem target="hello" text="Hello" />
                        <MenuItem target="skills" text="Skills" />
                        <MenuItem target="experience" text="Experience" />
                        <MenuItem target="courses" text="Courses" />
                        <MenuItem target="open-source" text="Open source" />
                        {/* <MenuItem target="portfolio" text="Portfolio" /> */}
                    </ul>
                </Grid.Column>
            </Grid.Row>
        </Section>
    </header>
)
