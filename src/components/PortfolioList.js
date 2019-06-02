const React = require('react')
const { css } = require('glamor')

const { colors } = require('../variables')

const BREAKPOINT = '@media(max-width: 600px)'

module.exports = {
    Wrapper: ({ children }) => (
        <ul className={css({ padding: 0, listStyle: 'none' })}>{children}</ul>
    ),
    Item: ({ slug, thumb, image, title, description, stack = [] }) => (
        <li
            className={css({
                display: 'flex',
                marginBottom: 30,
                paddingBottom: 10,
                borderBottom: `solid 1px ${colors.accent}`,
                [BREAKPOINT]: {
                    flexDirection: 'column'
                }
            })}
        >
            <a
                href={`#portfolio-${slug}`}
                className={css({
                    [BREAKPOINT]: {
                        textAlign: 'center'
                    }
                })}
            >
                <img
                    src={thumb}
                    draggable="false"
                    alt={title}
                    className={css({
                        maxWidth: 270,
                        margin: '0 auto',
                        '@media print': {
                            display: 'none'
                        }
                    })}
                />
            </a>
            <a
                href="#_"
                id={`portfolio-${slug}`}
                className={css({
                    opacity: 0,
                    left: 0,
                    position: 'fixed',
                    zIndex: 9995,
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'opacity .3s ease-in-out',
                    background: 'rgba(0,0,0,0.8)',
                    top: '-100%',
                    ':target': {
                        opacity: 1,
                        top: 0,
                        outline: 'none'
                    }
                })}
            >
                <img
                    src={image}
                    alt={title}
                    className={css({
                        maxWidth: '90%',
                        maxHeight: '80%',
                        marginTop: '2%'
                    })}
                />
            </a>
            <div className={css({ paddingLeft: 15 })}>
                <h4
                    className={css({
                        marginTop: 0,
                        marginBottom: 5,
                        fontSize: '1.5em',
                        [BREAKPOINT]: {
                            textAlign: 'center'
                        },
                        '@media print': {
                            textAlign: 'left'
                        }
                    })}
                >
                    {title}
                </h4>
                <p className={css({ margin: 0 })}>{description}</p>
                {stack.length > 0 && (
                    <ul className={css({ padding: 0, listStyle: 'none' })}>
                        {stack.map(item => (
                            <li
                                className={css({
                                    background: colors.accent,
                                    color: colors.secondary,
                                    padding: '3px 9px',
                                    borderRadius: 19,
                                    display: 'inline-block',
                                    margin: '5px 5px 0 0',
                                    fontSize: 12,
                                    '@media print': {
                                        background: 'none',
                                        padding: 3,
                                        marginRight: 0,
                                        ':not(:last-child):after': {
                                            paddingLeft: 5,
                                            content: '\\2022'
                                        }
                                    }
                                })}
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    )
}
