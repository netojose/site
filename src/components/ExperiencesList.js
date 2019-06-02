const React = require('react')
const { css } = require('glamor')

const { colors } = require('../variables')

module.exports = {
    Wrapper: ({ children }) => (
        <ul className={css({ padding: 0, listStyle: 'none' })}>{children}</ul>
    ),
    Item: ({
        title,
        description,
        link = null,
        subtitle = null,
        start = null,
        end = null,
        image = null
    }) => (
        <li
            className={css({
                marginBottom: 20,
                display: 'flex',
                flexDirection: 'row'
            })}
        >
            {image && (
                <img
                    src={image}
                    alt={title}
                    draggable="false"
                    className={css({
                        width: 60,
                        height: 60,
                        border: `solid 1px ${colors.accent}`,
                        borderRadius: '50%',
                        marginRight: 10,
                        '@media print': {
                            display: 'none'
                        }
                    })}
                />
            )}
            <div>
                <h4 className={css({ margin: 0, lineHeight: '1em' })}>
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            className={css({
                                '@media print': {
                                    ':after': {
                                        content: 'attr(href)',
                                        fontSize: '0.7em',
                                        fontWeight: 'normal',
                                        display: 'block',
                                        color: colors.primary
                                    }
                                }
                            })}
                        >
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                    {subtitle && (
                        <span
                            className={css({
                                opacity: 0.8,
                                fontWeight: 400,
                                paddingLeft: 10
                            })}
                        >
                            {subtitle}
                        </span>
                    )}
                </h4>
                {start && end && (
                    <p
                        className={css({
                            opacity: 0.8,
                            margin: 0,
                            fontSize: 13
                        })}
                    >
                        {start} - {end}
                    </p>
                )}
                {description && (
                    <p
                        className={css({
                            margin: 0,
                            opacity: 0.8,
                            fontStyle: 'italic'
                        })}
                    >
                        {Array.isArray(description)
                            ? description.join(', ')
                            : description}
                    </p>
                )}
            </div>
        </li>
    )
}
