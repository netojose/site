const React = require('react')

const Page = require('./Page')
const Header = require('./Header')
const Hello = require('./sections/Hello')
const Skills = require('./sections/Skills')
const Experiences = require('./sections/Experiences')
const Courses = require('./sections/Courses')
const OpenSource = require('./sections/OpenSource')
// const Portfolio = require('./sections/Portfolio')

module.exports = ({ css, js }) => (
    <Page css={css} js={js} title="José Neto">
        <Header />
        <Hello />
        <Skills />
        <Experiences />
        <Courses />
        <OpenSource />
        {/*<Portfolio />*/}
    </Page>
)
