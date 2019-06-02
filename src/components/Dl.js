const React = require('react')
const { css } = require('glamor')

module.exports = ({ items }) => (
    <dl>
        {items.map((item, i) => (
            <React.Fragment key={i}>
                <dt
                    className={css({
                        float: 'left',
                        clear: 'left',
                        width: 100,
                        textAlign: 'left',
                        textTransform: 'uppercase',
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 1.66,
                        ' &::after': {
                            content: ':'
                        }
                    })}
                >
                    {item[0]}
                </dt>
                <dd
                    className={css({
                        margin: '0 0 0 110px',
                        padding: '0 0 0.5em 0',
                        fontSize: 14,
                        lineHeight: 1.4
                    })}
                >
                    {item[1]}
                </dd>
            </React.Fragment>
        ))}
    </dl>
)
